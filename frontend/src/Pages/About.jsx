
import React from 'react';
import './About.css';  

const About = () => {
    return (
        <div className="about-page">
            <div className="hero-section">
                <div className="hero-icon">⚽</div>
                <h1>Livescore Bóng Đá - Cập Nhật Kết Quả Trực Tiếp</h1>
                <p>Nền tảng livescore bóng đá của chúng tôi cung cấp cập nhật theo thời gian thực từ hàng trăm giải đấu trên toàn thế giới. Bạn có thể theo dõi tỷ số trực tiếp, thống kê trận đấu, đội hình, bàn thắng, thẻ phạt và các diễn biến quan trọng một cách nhanh chóng và chính xác.</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Giải đấu</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Trận đấu/tháng</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">100K+</div>
                    <div className="stat-label">Người dùng</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Cập nhật liên tục</div>
                </div>
            </div>

            <div className="section-title">
                <h2>Tính năng nổi bật</h2>
                <p>Những công cụ giúp bạn trải nghiệm bóng đá tốt nhất</p>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Cập nhật theo thời gian thực</h3>
                    <p>Dữ liệu được cập nhật tự động liên tục, không cần tải lại trang. Theo dõi tỷ số trực tiếp, bàn thắng, thẻ phạt ngay khi diễn ra.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Thống kê trận đấu chi tiết</h3>
                    <p>Thống kê đầy đủ về kiểm soát bóng, sút bóng, phạt góc, thẻ phạt,... giúp bạn phân tích trận đấu chuyên sâu.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📋</div>
                    <h3>Đội hình và diễn biến</h3>
                    <p>Xem đội hình ra sân, sơ đồ chiến thuật, bàn thắng và các sự thay đổi quan trọng trong suốt trận đấu.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📅</div>
                    <h3>Lịch thi đấu & Bảng xếp hạng</h3>
                    <p>Đầy đủ lịch thi đấu, bảng xếp hạng chi tiết và thông tin của từng đội bóng trên mọi giải đấu.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h3>Trang đội bóng chuyên sâu</h3>
                    <p>Mỗi đội bóng có trang riêng với phong độ gần đây, lịch sử thi đấu và các chỉ số thống kê.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🌍</div>
                    <h3>Hàng trăm giải đấu</h3>
                    <p>Theo dõi kết quả từ Ngoại hạng Anh, La Liga, Bundesliga, Serie A, Cúp C1, World Cup và nhiều giải đấu khác.</p>
                </div>
            </div>

            <div className="info-section">
                <div className="info-content">
                    <div className="info-text">
                        <h3> Dữ liệu chính xác và nhanh chóng</h3>
                        <p>Chúng tôi cung cấp đầy đủ bảng xếp hạng, lịch thi đấu và thông tin chi tiết của từng trận đấu. Mỗi đội bóng đều có trang riêng với phong độ gần đây, lịch sử thi đấu và các chỉ số thống kê. Dữ liệu được cập nhật tự động liên tục, không cần tải lại trang.</p>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <h3>Liên hệ với chúng tôi</h3>
                <div className="contact-info">
                    <p><i className="fas fa-map-marker-alt"></i> 123 Đường Nguyễn Văn Linh, TP.Đà Nẵng</p>
                    <p><i className="fas fa-phone"></i> +84 123 456 789</p>
                    <p><i className="fas fa-envelope"></i> support@uefaplayer.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;
