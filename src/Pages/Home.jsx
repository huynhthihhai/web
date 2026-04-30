
import React, { useState } from 'react';
import './Home.css';

const Home = () => {

    const [voteStats, setVoteStats] = useState({ Chelsea: 0, ManCity: 0, neutral: 0 });
    const [userVoted, setUserVoted] = useState(false);
    const [showVoteWidget, setShowVoteWidget] = useState(true);


    const [searchTerm, setSearchTerm] = useState('');


    const [activeTab, setActiveTab] = useState('live');


    const [showAllPerformances, setShowAllPerformances] = useState(false);


    const players = [
        { name: "Kylian Mbappé", club: "Real Madrid", rating: "8.99", rank: 1, icon: "KM" },
        { name: "Lamine Yamal", club: "FC Barcelona", rating: "8.77", rank: 2, icon: "LY" },
        { name: "Harry Kane", club: "FC Bayern", rating: "8.65", rank: 3, icon: "HK" },
        { name: "Jude Bellingham", club: "Real Madrid", rating: "8.41", rank: 4, icon: "JB" },
        { name: "Florian Wirtz", club: "Bayer Leverkusen", rating: "8.32", rank: 5, icon: "FW" }
    ];


    const topPerformances = [
        { rank: 1, name: "Victor Guzmán", role: "Midfielder", stats: "📊 4 - 2", grade: "🟩 10", icon: "VG" },
        { rank: 2, name: "Filip Bilbija", role: "Forward", stats: "📊 4 - 3", grade: "🟩 10", icon: "FB" },
        { rank: 3, name: "Kings Kangwa", role: "Midfielder", stats: "📊 1 - 3", grade: "🟩 10", icon: "KK" },
        { rank: 4, name: "Jude Bellingham", role: "Midfielder", stats: "📊 2 - 1", grade: "🟩 9.2", icon: "JB" },
        { rank: 5, name: "Mohamed Salah", role: "Forward", stats: "📊 3 - 0", grade: "🟩 9.0", icon: "MS" },
        { rank: 6, name: "Florian Wirtz", role: "Attacking Mid", stats: "📊 2 - 2", grade: "🟩 8.9", icon: "FW" }
    ];


    const displayedPerformances = showAllPerformances ? topPerformances : topPerformances.slice(0, 3);


    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.club.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const liveMatches = [
        { time: "20:00", teams: "Crystal Palace - Newcastle", league: "Premier League", country: "Anh" },
        { time: "20:00", teams: "Forest - Aston Villa", league: "Premier League", country: "Anh" },
        { time: "23:00", teams: "Real Madrid - Bayern", league: "UEFA Champions League", country: "Châu Âu" },
        { time: "23:00", teams: "PSG - Dortmund", league: "UEFA Champions League", country: "Châu Âu" }
    ];

    const finishedMatches = [
        { time: "19:30", teams: "Arsenal - Man United", score: "2-1", league: "Premier League", country: "Anh" },
        { time: "21:00", teams: "Barcelona - Real Madrid", score: "3-2", league: "La Liga", country: "Tây Ban Nha" },
        { time: "20:00", teams: "Bayern - Dortmund", score: "4-0", league: "Bundesliga", country: "Đức" }
    ];

    const upcomingMatches = [
        { time: "22:00", teams: "Chelsea - Liverpool", league: "Premier League", country: "Anh" },
        { time: "23:30", teams: "Man City - Arsenal", league: "Premier League", country: "Anh" },
        { time: "21:00", teams: "Juventus - Inter", league: "Serie A", country: "Ý" }
    ];

    const getCurrentMatches = () => {
        switch (activeTab) {
            case 'live': return liveMatches;
            case 'finished': return finishedMatches;
            case 'upcoming': return upcomingMatches;
            default: return liveMatches;
        }
    };

    const registerVote = (team) => {
        if (userVoted) {
            alert("Bạn đã bình chọn rồi!");
            return;
        }

        const newStats = { ...voteStats };
        if (team === 'Chelsea') newStats.Chelsea++;
        else if (team === 'ManCity') newStats.ManCity++;
        else newStats.neutral++;

        setVoteStats(newStats);
        setUserVoted(true);
        alert("Cảm ơn bạn đã bình chọn!");
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="home-container">

            <div className="search-section">
                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        placeholder=" Tìm kiếm cầu thủ theo tên hoặc câu lạc bộ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button className="clear-search" onClick={() => setSearchTerm('')}>
                            <i className="fas fa-times"></i>
                        </button>
                    )}
                </div>

                {searchTerm && (
                    <div className="search-results">
                        <div className="search-results-header">
                            <span>Kết quả tìm kiếm cho: <strong>"{searchTerm}"</strong></span>
                            <span className="result-count">{filteredPlayers.length} cầu thủ</span>
                        </div>
                        {filteredPlayers.length > 0 ? (
                            <div className="search-results-list">
                                {filteredPlayers.map(player => (
                                    <div key={player.name} className="search-result-item">
                                        <div className="result-rank">#{player.rank}</div>
                                        <div className="result-icon">{player.icon}</div>
                                        <div className="result-info">
                                            <div className="result-name">{player.name}</div>
                                            <div className="result-club">{player.club}</div>
                                        </div>
                                        <div className="result-rating">{player.rating}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <i className="fas fa-futbol"></i>
                                <p>Không tìm thấy cầu thủ nào phù hợp</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="dashboard">
                {/* Sidebar - Lịch thi đấu */}
                <div className="matches-sidebar">
                    <div className="sidebar-header">
                        <div className="tab-row">
                            <span className={`tab-item ${activeTab === 'live' ? 'active' : ''}`} onClick={() => handleTabClick('live')}>
                                Trực tiếp ({liveMatches.length})
                            </span>
                            <span className={`tab-item ${activeTab === 'finished' ? 'active' : ''}`} onClick={() => handleTabClick('finished')}>
                                Đã kết thúc
                            </span>
                            <span className={`tab-item ${activeTab === 'upcoming' ? 'active' : ''}`} onClick={() => handleTabClick('upcoming')}>
                                Sắp diễn ra
                            </span>
                        </div>
                    </div>

                    {getCurrentMatches().map((match, index) => (
                        <div key={index} className="league-block">
                            <div className="league-title">
                                <span className="league-name">{match.league}</span>
                                <span className="league-country">{match.country}</span>
                            </div>
                            <div className="match-row">
                                <div className="match-time-badge">{match.time}</div>
                                <div className="match-teams">
                                    {match.teams}
                                    {match.score && <span className="match-score"> ({match.score})</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="right-card">

                    <div className="premium-card">
                        <div className="league-badge">🏆 Premier League · Vòng 32</div>
                        <div className="match-showdown">
                            <div className="team-card">
                                <div className="team-logo">🔵</div>
                                <div className="team-name">Chelsea</div>
                            </div>
                            <div className="match-time-centre">
                                <div className="time-clock">22:30</div>
                            </div>
                            <div className="team-card">
                                <div className="team-logo">⚪</div>
                                <div className="team-name">Man City</div>
                            </div>
                        </div>

                        {showVoteWidget && (
                            <div className="vote-widget">
                                <div className="close-vote-area">
                                    <span className="close-icon" onClick={() => setShowVoteWidget(false)}>✕</span>
                                </div>
                                <div className="vote-question">🏆 Ai sẽ thắng?</div>
                                <div className="vote-sub">Hãy bình chọn!</div>
                                <div className="vote-actions">
                                    <button className="vote-btn" onClick={() => registerVote('Chelsea')}>Chelsea</button>
                                    <button className="vote-btn" onClick={() => registerVote('neutral')}>❌ Hòa</button>
                                    <button className="vote-btn" onClick={() => registerVote('ManCity')}>Man City</button>
                                </div>
                                <div className="vote-stats">
                                    {voteStats.Chelsea + voteStats.ManCity + voteStats.neutral === 0 ?
                                        "⚡ Chưa có lượt bình chọn nào" :
                                        `🗳️ Chelsea: ${voteStats.Chelsea} (${((voteStats.Chelsea / (voteStats.Chelsea + voteStats.ManCity + voteStats.neutral)) * 100).toFixed(1)}%) | Man City: ${voteStats.ManCity} (${((voteStats.ManCity / (voteStats.Chelsea + voteStats.ManCity + voteStats.neutral)) * 100).toFixed(1)}%) | ❌ Hòa: ${voteStats.neutral}`
                                    }
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="player-rank-card">
                        <div className="player-header">
                            <div className="player-title">
                                <h3>🏆 Cuộc đua Cầu thủ xuất sắc nhất mùa giải</h3>
                                <h2>UEFA Champions League</h2>
                            </div>
                            <div className="uefa-tag">2024/25 · TOP 5</div>
                        </div>
                        <div className="table-wrapper">
                            <table className="rank-table">
                                <thead>
                                    <tr><th>#</th><th>Cầu thủ</th><th>Câu lạc bộ</th><th>Đánh giá</th></tr>
                                </thead>
                                <tbody>
                                    <tr className="rank-1"><td className="rank-num">1</td><td><div className="player-flex"><div className="player-icon">KM</div><div><div className="p-name">Kylian Mbappé</div><div className="p-club">Real Madrid</div></div></div></td><td>Real Madrid</td><td><span className="rating-badge">8.99</span></td></tr>
                                    <tr className="rank-2"><td className="rank-num">2</td><td><div className="player-flex"><div className="player-icon">LY</div><div><div className="p-name">Lamine Yamal</div><div className="p-club">FC Barcelona</div></div></div></td><td>FC Barcelona</td><td><span className="rating-badge">8.77</span></td></tr>
                                    <tr className="rank-3"><td className="rank-num">3</td><td><div className="player-flex"><div className="player-icon">HK</div><div><div className="p-name">Harry Kane</div><div className="p-club">FC Bayern</div></div></div></td><td>FC Bayern</td><td><span className="rating-badge">8.65</span></td></tr>
                                    <tr><td className="rank-num">4</td><td><div className="player-flex"><div className="player-icon">JB</div><div><div className="p-name">Jude Bellingham</div><div className="p-club">Real Madrid</div></div></div></td><td>Real Madrid</td><td><span className="rating-badge">8.41</span></td></tr>
                                    <tr><td className="rank-num">5</td><td><div className="player-flex"><div className="player-icon">FW</div><div><div className="p-name">Florian Wirtz</div><div className="p-club">Bayer 04</div></div></div></td><td>Bayer Leverkusen</td><td><span className="rating-badge">8.32</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="top-perf-card">
                        <div className="top-perf-header">
                            <div className="player-title">
                                <h3>🔥 Top performances</h3>
                                <h2>Matchday 28</h2>
                            </div>
                            <div className="matchday-tag">⭐ Highest rated</div>
                        </div>
                        <div className="top-perf-list">
                            {displayedPerformances.map(perf => (
                                <div key={perf.rank} className="perf-item">
                                    <div className="perf-rank">{perf.rank}.</div>
                                    <div className="perf-icon">{perf.icon}</div>
                                    <div className="perf-details">
                                        <div className="perf-name">{perf.name}</div>
                                        <div className="perf-role">{perf.role}</div>
                                        <div className="perf-stats-row">
                                            <span className="stats-icon">{perf.stats}</span>
                                            <span className="green-box">{perf.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="show-more-container">
                            <button
                                className="show-more-btn"
                                onClick={() => setShowAllPerformances(!showAllPerformances)}
                            >
                                {showAllPerformances ? 'Thu gọn ▲' : 'Xem thêm ▼'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;