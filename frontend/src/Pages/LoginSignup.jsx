import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [forgotData, setForgotData] = useState({ email: '' });


  const handleLogin = (e) => {
    e.preventDefault();
    alert(` Đăng nhập thành công!\nEmail: ${loginData.email}`);
    navigate('/trang-chu');
  };


  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert(' Mật khẩu xác nhận không khớp!');
      return;
    }
    if (registerData.password.length < 6) {
      alert(' Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }
    alert(` Đăng ký thành công!\nChào mừng ${registerData.name}`);
    setActiveTab('login');
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
  };


  const handleForgot = (e) => {
    e.preventDefault();
    alert(` Đã gửi liên kết đặt lại mật khẩu đến ${forgotData.email}`);
    setActiveTab('login');
    setForgotData({ email: '' });
  };

  return (
    <div className="login-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>👋 Chào mừng!</h2>
          <p>Đăng nhập để trải nghiệm đầy đủ tính năng</p>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Đăng nhập
          </button>
          <button
            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Đăng ký
          </button>
        </div>

        <div className="auth-body">

          {activeTab === 'login' && (
            <form className="auth-form active" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <div className="password-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('forgot'); }}>
                  Quên mật khẩu?
                </a>
              </div>

              <button type="submit" className="auth-submit">Đăng nhập</button>

              <div className="auth-divider">hoặc tiếp tục với</div>

              <div className="social-login">
                <button type="button" className="social-btn google" onClick={() => alert('Đang chuyển hướng đến Google...')}>
                  <i className="fab fa-google"></i> Google
                </button>
                <button type="button" className="social-btn facebook" onClick={() => alert('Đang chuyển hướng đến Facebook...')}>
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>

              <div className="auth-footer">
                Chưa có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('register'); }}>Đăng ký ngay</a>
              </div>
            </form>
          )}


          {activeTab === 'register' && (
            <form className="auth-form active" onSubmit={handleRegister}>
              <div className="form-group">
                <label>Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <div className="password-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Xác nhận mật khẩu</label>
                <div className="password-wrap">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <button type="submit" className="auth-submit">Tạo tài khoản</button>

              <div className="auth-divider">hoặc đăng ký với</div>

              <div className="social-login">
                <button type="button" className="social-btn google" onClick={() => alert('Đang chuyển hướng đến Google...')}>
                  <i className="fab fa-google"></i> Google
                </button>
                <button type="button" className="social-btn facebook" onClick={() => alert('Đang chuyển hướng đến Facebook...')}>
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>

              <div className="terms-text">
                Bằng việc đăng ký, bạn đồng ý với <a href="#">Điều khoản</a> và <a href="#">Chính sách bảo mật</a>
              </div>

              <div className="auth-footer">
                Đã có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}>Đăng nhập</a>
              </div>
            </form>
          )}


          {activeTab === 'forgot' && (
            <form className="auth-form active" onSubmit={handleForgot}>
              <div className="back-to-login" onClick={() => setActiveTab('login')}>
                <i className="fas fa-arrow-left"></i> Quay lại đăng nhập
              </div>

              <div className="auth-header" style={{ padding: '0 0 16px 0' }}>
                <h2> Quên mật khẩu?</h2>
                <p>Nhập email để nhận liên kết đặt lại mật khẩu</p>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={forgotData.email}
                  onChange={(e) => setForgotData({ ...forgotData, email: e.target.value })}
                />
              </div>

              <button type="submit" className="auth-submit">Gửi liên kết</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;