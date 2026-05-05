
import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo-section">
                    <div className="football-brand">
                        <span data-text="FOOTBALL">FOOTBALL</span>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Quick Links:</h4>
                        <div className="footer-links">
                            <button className="footer-link-btn">Livescore</button>
                            <button className="footer-link-btn">Fixtures</button>
                            <button className="footer-link-btn">Standings</button>
                            <button className="footer-link-btn">Teams</button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Company:</h4>
                        <div className="footer-links">
                            <button className="footer-link-btn">About</button>
                            <button className="footer-link-btn">Contact</button>
                            <button className="footer-link-btn">Advertise</button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Legal:</h4>
                        <div className="footer-links">
                            <button className="footer-link-btn">Privacy Policy</button>
                            <button className="footer-link-btn">Terms of Service</button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Follow us:</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/uefaplayer" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/uefaplayer" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.tiktok.com/@uefaplayer" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-tiktok"></i>
                                <span>TikTok</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>© {currentYear} Football. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
