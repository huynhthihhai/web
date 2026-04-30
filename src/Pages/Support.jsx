
import React, { useState } from 'react';
import './Support.css';

const Support = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cảm ơn ${formData.name}! Yêu cầu hỗ trợ của bạn đã được gửi. Chúng tôi sẽ phản hồi trong vòng 24h.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="support-container">
            \
            <div className="hero-section-support">
                <div className="hero-icon-support">🎧</div>
                <h1>Trung tâm Hỗ trợ</h1>
                <p>Chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7</p>
            </div>

            \
            <div className="stats-grid-support">
                <div className="stat-card-support">
                    <div className="stat-number-support">24/7</div>
                    <div className="stat-label-support">Hỗ trợ liên tục</div>
                </div>
                <div className="stat-card-support">
                    <div className="stat-number-support">&lt; 2 phút</div>
                    <div className="stat-label-support">Thời gian phản hồi</div>
                </div>
                <div className="stat-card-support">
                    <div className="stat-number-support">98%</div>
                    <div className="stat-label-support">Hài lòng khách hàng</div>
                </div>
                <div className="stat-card-support">
                    <div className="stat-number-support">50+</div>
                    <div className="stat-label-support">Chuyên gia hỗ trợ</div>
                </div>
            </div>

            \
            <div className="section-title-support">
                <h2>Kênh hỗ trợ</h2>
                <p>Chọn kênh liên hệ phù hợp với bạn</p>
            </div>

            <div className="channels-grid-support">
                <div className="channel-card-support">
                    <div className="channel-icon-support">💬</div>
                    <h3>Live Chat</h3>
                    <p>Trò chuyện trực tiếp với nhân viên hỗ trợ</p>
                    <button className="channel-btn-support" onClick={() => alert('Đang kết nối đến nhân viên hỗ trợ...')}>
                        Chat ngay
                    </button>
                </div>

                <div className="channel-card-support">
                    <div className="channel-icon-support">📧</div>
                    <h3>Email</h3>
                    <p>Gửi email cho chúng tôi</p>
                    <button className="channel-btn-support" onClick={() => alert('support@uefaplayer.com')}>
                        Gửi email
                    </button>
                </div>

                <div className="channel-card-support">
                    <div className="channel-icon-support">📞</div>
                    <h3>Hotline</h3>
                    <p>Gọi trực tiếp để được hỗ trợ nhanh nhất</p>
                    <button className="channel-btn-support" onClick={() => alert('Gọi: 1900 1234')}>
                        Gọi ngay
                    </button>
                </div>

                <div className="channel-card-support">
                    <div className="channel-icon-support">📱</div>
                    <h3>Fanpage</h3>
                    <p>Nhắn tin qua Facebook Messenger</p>
                    <button className="channel-btn-support" onClick={() => alert('fb.com/uefaplayer')}>
                        Truy cập
                    </button>
                </div>
            </div>


            <div className="section-title-support">
                <h2>Câu hỏi thường gặp</h2>
                <p>Những thắc mắc phổ biến của người dùng</p>
            </div>

            <div className="faq-grid-support">
                <div className="faq-item-support">
                    <div className="faq-question-support">
                        <i className="fas fa-question-circle"></i>
                        <h3>Làm thế nào để xem bảng xếp hạng cầu thủ?</h3>
                    </div>
                    <p>Bạn có thể xem bảng xếp hạng cầu thủ ngay tại trang chủ, phần "Player of the Season race".</p>
                </div>

                <div className="faq-item-support">
                    <div className="faq-question-support">
                        <i className="fas fa-question-circle"></i>
                        <h3>Làm sao để tham gia bình chọn?</h3>
                    </div>
                    <p>Chỉ cần nhấn vào nút bình chọn tại card trận đấu, mỗi người chỉ được bình chọn một lần.</p>
                </div>

                <div className="faq-item-support">
                    <div className="faq-question-support">
                        <i className="fas fa-question-circle"></i>
                        <h3>Dữ liệu có được cập nhật thường xuyên không?</h3>
                    </div>
                    <p>Dữ liệu được cập nhật liên tục 24/7 từ các nguồn uy tín.</p>
                </div>

                <div className="faq-item-support">
                    <div className="faq-question-support">
                        <i className="fas fa-question-circle"></i>
                        <h3>Làm thế nào để liên hệ với bộ phận hỗ trợ?</h3>
                    </div>
                    <p>Bạn có thể sử dụng các kênh hỗ trợ phía trên như Live Chat, Email, Hotline.</p>
                </div>
            </div>


            <div className="contact-section-support">
                <div className="contact-info-support">
                    <h3>Thông tin hỗ trợ</h3>
                    <div className="contact-item-support">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Trung tâm hỗ trợ</strong>
                            <p>Tầng 5, 123 Đường Nguyễn Văn Linh, TP.Đà Nẵng</p>
                        </div>
                    </div>
                    <div className="contact-item-support">
                        <i className="fas fa-phone"></i>
                        <div>
                            <strong>Hotline 24/7</strong>
                            <p>1900 1234</p>
                        </div>
                    </div>
                    <div className="contact-item-support">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <strong>Email hỗ trợ</strong>
                            <p>support@uefaplayer.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-support">
                    <h3>Gửi yêu cầu hỗ trợ</h3>
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
                            type="text"
                            name="subject"
                            placeholder="Tiêu đề"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Nội dung yêu cầu hỗ trợ..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="submit-btn-support">
                            Gửi yêu cầu
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;