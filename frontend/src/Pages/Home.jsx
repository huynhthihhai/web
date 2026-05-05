import React, { useEffect, useState } from "react";
import "./Home.css";

const API_BASE = "http://localhost:5001/api/football";

const Home = () => {
    const [liveMatches, setLiveMatches] = useState([]);
    const [todayMatches, setTodayMatches] = useState([]);
    const [activeTab, setActiveTab] = useState("live");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedMatch, setSelectedMatch] = useState(null);
    const [matchDetail, setMatchDetail] = useState(null);

    const [search, setSearch] = useState("");

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

                setLiveMatches(Array.isArray(liveData) ? liveData : []);
                setTodayMatches(Array.isArray(todayData) ? todayData : []);
                setError(null);
            } catch (err) {
                setError("Không thể kết nối đến máy chủ.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // FETCH DETAIL
    const fetchMatchDetail = async (id) => {
        try {
            const res = await fetch(`${API_BASE}/${id}`);
            const data = await res.json();
            setMatchDetail(data);
        } catch (err) {
            console.error(err);
        }
    };

    // FORMAT MATCH
    const formatMatch = (m) => {
        if (!m || !m.fixture) return null;

        return {
            id: m.fixture.id,
            league: m.league?.name,
            country: m.league?.country,
            leagueLogo: m.league?.logo,
            time: new Date(m.fixture.date).toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit"
            }),
            home: m.teams.home.name,
            away: m.teams.away.name,
            homeLogo: m.teams.home.logo,
            awayLogo: m.teams.away.logo,
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

        const formatted = list.map(formatMatch).filter(Boolean);

        return formatted.filter(m =>
            m.home.toLowerCase().includes(search.toLowerCase()) ||
            m.away.toLowerCase().includes(search.toLowerCase()) ||
            m.league.toLowerCase().includes(search.toLowerCase())
        );
    };

    const currentMatches = getMatches();

    return (
        <div className="home-container">
            <div className="dashboard">

                {/* LEFT */}
                <div className="matches-sidebar">

                    <div className="sidebar-header">
                        <div className="tab-row">
                            <span className={`tab-item ${activeTab === "live" ? "active" : ""}`}
                                onClick={() => setActiveTab("live")}>
                                Trực tiếp ({liveMatches.length})
                            </span>

                            <span className={`tab-item ${activeTab === "finished" ? "active" : ""}`}
                                onClick={() => setActiveTab("finished")}>
                                Đã kết thúc
                            </span>

                            <span className={`tab-item ${activeTab === "upcoming" ? "active" : ""}`}
                                onClick={() => setActiveTab("upcoming")}>
                                Sắp diễn ra
                            </span>
                        </div>
                    </div>

                    {/* SEARCH */}
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="🔍 Tìm đội bóng, giải đấu..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
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
                                        <img src={m.leagueLogo} className="league-logo" />
                                        <span className="league-name">{m.league}</span>
                                        <span className="league-country">{m.country}</span>
                                    </div>

                                    <div
                                        className="match-row"
                                        onClick={() => {
                                            setSelectedMatch(m);
                                            fetchMatchDetail(m.id);
                                        }}
                                    >
                                        <div className="match-time-badge">
                                            {activeTab === "live" ? `${m.elapsed}'` : m.time}
                                        </div>

                                        <div className="match-teams">
                                            <img src={m.homeLogo} className="team-logo" />
                                            {m.home}

                                            <span className="vs">vs</span>

                                            {m.away}
                                            <img src={m.awayLogo} className="team-logo" />

                                            <span className="match-score"> ({m.score})</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="right-card">
                    <div className="premium-card">
                        <div className="league-badge">📊 Chi tiết trận đấu</div>

                        {!selectedMatch ? (
                            <div className="no-matches">Chọn trận để xem</div>
                        ) : (
                            <>
                                <div className="match-showdown">

                                    <div className="team-full">
                                        <img src={selectedMatch.homeLogo} />
                                        <span>{selectedMatch.home}</span>
                                    </div>

                                    <div className="time-clock">{selectedMatch.score}</div>

                                    <div className="team-full">
                                        <img src={selectedMatch.awayLogo} />
                                        <span>{selectedMatch.away}</span>
                                    </div>

                                </div>

                                <div className="match-info">
                                    🏆 {selectedMatch.league} ({selectedMatch.country})
                                </div>

                                <div style={{ marginTop: "10px" }}>
                                    ⏱ {selectedMatch.elapsed || selectedMatch.time}
                                </div>

                                {/* LINEUP */}
                                <div style={{ marginTop: "15px" }}>
                                    <h4>Đội hình ra sân</h4>

                                    {!matchDetail ? (
                                        <div>Đang tải...</div>
                                    ) : (
                                        <div className="lineups">
                                            {matchDetail?.lineups?.map((team, idx) => (
                                                <div key={idx}>
                                                    <h5>{team.team.name}</h5>
                                                    {team.startXI.map((p, i) => (
                                                        <div key={i}>
                                                            {p.player.number} - {p.player.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* STATS */}
                                <div className="stats">
                                    <h4>📊 Thống kê</h4>

                                    {!matchDetail?.statistics ? (
                                        <div>Không có dữ liệu</div>
                                    ) : (
                                        matchDetail.statistics.map((team, idx) => (
                                            <div key={idx} className="stat-block">
                                                <h5>{team.team.name}</h5>

                                                {team.statistics.map((s, i) => (
                                                    <div key={i} className="stat-row">
                                                        <span>{s.type}</span>
                                                        <span>{s.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;