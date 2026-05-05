import React, { useEffect, useState } from "react";
import "./Home.css";

const API_BASE = "http://localhost:5001/api/football";

const Home = () => {
    const [liveMatches, setLiveMatches] = useState([]);
    const [todayMatches, setTodayMatches] = useState([]);
    const [activeTab, setActiveTab] = useState("live");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const [liveRes, todayRes] = await Promise.all([
                    fetch(`${API_BASE}/live`),
                    fetch(`${API_BASE}/today`)
                ]);

                const liveData = await liveRes.json();
                const todayData = await todayRes.json();

                console.log("LIVE:", liveData);
                console.log("TODAY:", todayData);

                setLiveMatches(Array.isArray(liveData) ? liveData : []);
                setTodayMatches(Array.isArray(todayData) ? todayData : []);

                setError(null);
            } catch (err) {
                console.error(err);
                setError("Không thể kết nối đến máy chủ.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatMatch = (m) => {
        if (!m || !m.fixture) return null;

        return {
            id: m.fixture.id,
            league: m.league?.name,
            country: m.league?.country,
            time: new Date(m.fixture.date).toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit"
            }),
            home: m.teams.home.name,
            away: m.teams.away.name,
            score: `${m.goals.home ?? 0} - ${m.goals.away ?? 0}`,
            status: m.fixture.status.short,
            elapsed: m.fixture.status.elapsed
        };
    };

    const getMatches = () => {
        let list = [];

        if (activeTab === "live") {
            list = liveMatches;
        } else if (activeTab === "finished") {
            list = todayMatches.filter(m =>
                ["FT", "AET", "PEN"].includes(m.fixture?.status?.short)
            );
        } else {
            list = todayMatches.filter(m =>
                m.fixture?.status?.short === "NS"
            );
        }

        return list.map(formatMatch).filter(Boolean);
    };

    const currentMatches = getMatches();

    return (
        <div className="home-container">
            <div className="dashboard">
                <div className="matches-sidebar">
                    <div className="sidebar-header">
                        <div className="tab-row">
                            <span
                                className={`tab-item ${activeTab === "live" ? "active" : ""}`}
                                onClick={() => setActiveTab("live")}
                            >
                                Trực tiếp ({liveMatches.length})
                            </span>

                            <span
                                className={`tab-item ${activeTab === "finished" ? "active" : ""}`}
                                onClick={() => setActiveTab("finished")}
                            >
                                Đã kết thúc
                            </span>

                            <span
                                className={`tab-item ${activeTab === "upcoming" ? "active" : ""}`}
                                onClick={() => setActiveTab("upcoming")}
                            >
                                Sắp diễn ra
                            </span>
                        </div>
                    </div>

                    <div>
                        {loading ? (
                            <div className="no-matches">Đang tải...</div>
                        ) : error ? (
                            <div className="no-matches">{error}</div>
                        ) : currentMatches.length === 0 ? (
                            <div className="no-matches">Không có trận</div>
                        ) : (
                            currentMatches.map(m => (
                                <div key={m.id} className="league-block">
                                    <div className="league-title">
                                        <span className="league-name">{m.league}</span>
                                        <span className="league-country">{m.country}</span>
                                    </div>

                                    <div className="match-row">
                                        <div className="match-time-badge">
                                            {activeTab === "live" ? `${m.elapsed}'` : m.time}
                                        </div>

                                        <div className="match-teams">
                                            {m.home} vs {m.away}
                                            <span className="match-score"> ({m.score})</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="right-card">
                    <div className="premium-card">
                        <div className="league-badge">🏆 Trận nổi bật</div>

                        {liveMatches.length > 0 ? (
                            (() => {
                                const m = formatMatch(liveMatches[0]);
                                return (
                                    <div className="match-showdown">
                                        <div className="team-card">{m.home}</div>
                                        <div className="time-clock">{m.score}</div>
                                        <div className="team-card">{m.away}</div>
                                    </div>
                                );
                            })()
                        ) : (
                            <div className="no-matches">Không có trận live</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;