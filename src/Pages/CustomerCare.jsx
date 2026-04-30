
import React, { useState } from 'react';
import './CustomerCare.css';

const CustomerCare = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cảm ơn ${formData.name}! Góp ý của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.`);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="care-container">

            <div className="hero-section-care">
                <div className="hero-icon-care">❤️</div>
                <h1>Chăm sóc Khách hàng</h1>
                <p>Chúng tôi coi khách hàng là trung tâm của mọi hoạt động</p>
            </div>

            <div className="stats-grid-care">
                <div className="stat-card-care">
                    <div className="stat-number-care">100%</div>
                    <div className="stat-label-care">Cam kết hài lòng</div>
                </div>
                <div className="stat-card-care">
                    <div className="stat-number-care">15 phút</div>
                    <div className="stat-label-care">Phản hồi trung bình</div>
                </div>
                <div className="stat-card-care">
                    <div className="stat-number-care">4.9/5</div>
                    <div className="stat-label-care">Đánh giá từ KH</div>
                </div>
                <div className="stat-card-care">
                    <div className="stat-number-care">100+</div>
                    <div className="stat-label-care">Đối tác</div>
                </div>
            </div>

            <div className="section-title-care">
                <h2>Chính sách của chúng tôi</h2>
                <p>Cam kết mang đến trải nghiệm tốt nhất</p>
            </div>

            <div className="policy-section-care">
                <h3><i className="fas fa-shield-alt"></i> Chính sách bảo mật</h3>
                <ul className="policy-list-care">
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <strong>Bảo mật thông tin:</strong>
                        <span>Cam kết bảo vệ thông tin cá nhân tuyệt đối</span>
                    </li>
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <strong>Không chia sẻ dữ liệu:</strong>
                        <span>Thông tin không chia sẻ với bên thứ ba</span>
                    </li>
                    <li>
                        <i className="fas fa-check-circle"></i>
                        <strong>Mã hóa dữ liệu:</strong>
                        <span>Mã hóa SSL 256-bit</span>
                    </li>
                </ul>
            </div>


            <div className="section-title-care">
                <h2>Dịch vụ chăm sóc đặc biệt</h2>
                <p>Những lợi ích dành riêng cho khách hàng thân thiết</p>
            </div>

            <div className="care-features-grid">
                <div className="care-feature-card">
                    <div className="care-feature-icon">👑</div>
                    <h3>Khách hàng VIP</h3>
                    <p>Ưu đãi đặc biệt, giảm giá lên đến 30%</p>
                </div>
                <div className="care-feature-card">
                    <div className="care-feature-icon">🎁</div>
                    <h3>Quà tặng sinh nhật</h3>
                    <p>Nhận quà tặng bất ngờ vào dịp sinh nhật</p>
                </div>
                <div className="care-feature-card">
                    <div className="care-feature-icon">⭐</div>
                    <h3>Điểm thưởng tích lũy</h3>
                    <p>Tích lũy điểm, đổi quà hấp dẫn</p>
                </div>
                <div className="care-feature-card">
                    <div className="care-feature-icon">🎫</div>
                    <h3>Vé xem trận đấu</h3>
                    <p>Cơ hội nhận vé xem các trận cầu đỉnh cao</p>
                </div>
            </div>

            <div className="contact-section-care">
                <div className="contact-info-care">
                    <h3>Liên hệ chăm sóc khách hàng</h3>
                    <div className="contact-item-care">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Trụ sở chính</strong>
                            <p>123 Đường Nguyễn Văn Linh, TP.Đà Nẵng</p>
                        </div>
                    </div>
                    <div className="contact-item-care">
                        <i className="fas fa-phone"></i>
                        <div>
                            <strong>Tổng đài CSKH</strong>
                            <p>1800 5678 (Miễn phí)</p>
                        </div>
                    </div>
                    <div className="contact-item-care">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <strong>Email CSKH</strong>
                            <p>care@uefaplayer.com</p>
                        </div>
                    </div>
                    <div className="contact-item-care">
                        <i className="fas fa-clock"></i>
                        <div>
                            <strong>Giờ làm việc</strong>
                            <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-care">
                    <h3>Gửi góp ý / Khiếu nại</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ và tên"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Nội dung góp ý / khiếu nại..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="submit-btn-care">
                            Gửi góp ý <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerCare;