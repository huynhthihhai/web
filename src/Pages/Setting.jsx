import React, { useState } from 'react';
import './Setting.css';

const Setting = () => {

  const [settings, setSettings] = useState({
    language: 'vi',
    theme: 'dark',
    notifications: true,
    emailUpdates: true,
    matchReminders: true,
    newsLetter: false,
    autoPlay: false,
    dataSaver: false,
    fontSize: 'medium'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123 456 789',
    avatar: ''
  });

  const handleSettingChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const saveSettings = () => {
    alert(' Đã lưu cài đặt thành công!');
    setIsEditing(false);
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h1>⚙️ Cài đặt</h1>
          <p>Quản lý tài khoản và tùy chỉnh trải nghiệm của bạn</p>
        </div>

        <div className="settings-content">

          <div className="settings-section">
            <div className="section-header">
              <i className="fas fa-user-circle"></i>
              <h2>Thông tin cá nhân</h2>
              <button
                className="edit-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                <i className={`fas ${isEditing ? 'fa-save' : 'fa-pen'}`}></i>
                {isEditing ? ' Lưu' : ' Chỉnh sửa'}
              </button>
            </div>

            <div className="profile-info">
              <div className="avatar-section">
                <div className="avatar">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt="Avatar" />
                  ) : (
                    <span>{profile.name.charAt(0)}</span>
                  )}
                </div>
                {isEditing && (
                  <button className="change-avatar-btn">
                    <i className="fas fa-camera"></i> Đổi ảnh
                  </button>
                )}
              </div>

              <div className="info-fields">
                <div className="info-field">
                  <label>Họ và tên</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <p>{profile.name}</p>
                  )}
                </div>

                <div className="info-field">
                  <label>Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <p>{profile.email}</p>
                  )}
                </div>

                <div className="info-field">
                  <label>Số điện thoại</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <p>{profile.phone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>


          <div className="settings-section">
            <div className="section-header">
              <i className="fas fa-globe"></i>
              <h2>Giao diện & Ngôn ngữ</h2>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-language"></i>
                <div>
                  <h4>Ngôn ngữ</h4>
                  <p>Chọn ngôn ngữ hiển thị</p>
                </div>
              </div>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="setting-select"
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-moon"></i>
                <div>
                  <h4>Chế độ tối</h4>
                  <p>Chuyển đổi giao diện sáng/tối</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.theme === 'dark'}
                  onChange={(e) => handleSettingChange('theme', e.target.checked ? 'dark' : 'light')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-text-height"></i>
                <div>
                  <h4>Cỡ chữ</h4>
                  <p>Điều chỉnh kích thước chữ</p>
                </div>
              </div>
              <div className="font-size-buttons">
                <button
                  className={`font-btn ${settings.fontSize === 'small' ? 'active' : ''}`}
                  onClick={() => handleSettingChange('fontSize', 'small')}
                >
                  A-
                </button>
                <button
                  className={`font-btn ${settings.fontSize === 'medium' ? 'active' : ''}`}
                  onClick={() => handleSettingChange('fontSize', 'medium')}
                >
                  A
                </button>
                <button
                  className={`font-btn ${settings.fontSize === 'large' ? 'active' : ''}`}
                  onClick={() => handleSettingChange('fontSize', 'large')}
                >
                  A+
                </button>
              </div>
            </div>
          </div>


          <div className="settings-section">
            <div className="section-header">
              <i className="fas fa-bell"></i>
              <h2>Thông báo</h2>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-bell"></i>
                <div>
                  <h4>Thông báo đẩy</h4>
                  <p>Nhận thông báo về trận đấu và kết quả</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email cập nhật</h4>
                  <p>Nhận tin tức qua email</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.emailUpdates}
                  onChange={(e) => handleSettingChange('emailUpdates', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-futbol"></i>
                <div>
                  <h4>Nhắc nhở trận đấu</h4>
                  <p>Thông báo trước 15 phút khi trận đấu bắt đầu</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.matchReminders}
                  onChange={(e) => handleSettingChange('matchReminders', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>


          <div className="settings-section">
            <div className="section-header">
              <i className="fas fa-cog"></i>
              <h2>Tùy chọn khác</h2>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-play-circle"></i>
                <div>
                  <h4>Tự động phát video</h4>
                  <p>Tự động phát video highlight khi vào trang</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.autoPlay}
                  onChange={(e) => handleSettingChange('autoPlay', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <i className="fas fa-tachometer-alt"></i>
                <div>
                  <h4>Tiết kiệm dữ liệu</h4>
                  <p>Giảm chất lượng hình ảnh để tiết kiệm dữ liệu</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.dataSaver}
                  onChange={(e) => handleSettingChange('dataSaver', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
          <div className="settings-actions">
            <button className="save-btn" onClick={saveSettings}>
              <i className="fas fa-save"></i> Lưu cài đặt
            </button>
            <button className="reset-btn" onClick={() => window.location.reload()}>
              <i className="fas fa-undo-alt"></i> Đặt lại
            </button>
          </div>


          <div className="danger-section">
            <h3><i className="fas fa-exclamation-triangle"></i> Vùng nguy hiểm</h3>
            <button className="logout-btn" onClick={() => alert('Đăng xuất thành công!')}>
              <i className="fas fa-sign-out-alt"></i> Đăng xuất
            </button>
            <button className="delete-btn" onClick={() => {
              if (window.confirm('Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác!')) {
                alert('Tài khoản đã được xóa');
              }
            }}>
              <i className="fas fa-trash-alt"></i> Xóa tài khoản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;