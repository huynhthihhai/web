import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/logo-icon.png'
import { Link } from 'react-router-dom';
const Header = () => {

    const [menu, setMenu] = useState("trang chủ");
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="" />
                <span className="logo-text" data-text="FOOTBALL">FOOTBALL</span>
                <span className="shine-layer"></span>
            </div>
            <ul className="header-menu">
                <li onClick={() => { setMenu("trang chủ") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/trang-chu'>Trang chủ</Link> {menu === "trang chủ" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("giới thiệu") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/gioi-thieu'>Giới thiệu</Link> {menu === "giới thiệu" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("hỗ trợ") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/ho-tro'>Hỗ trợ</Link> {menu === "hỗ trợ" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("chăm sóc kh") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/cham-soc-khach-hang'>Chăm sóc KH</Link> {menu === "chăm sóc kh" ? <hr /> : <></>}</li>
            </ul>
            <div className="header-login-setting">
                <Link to='/login'><button>Đăng nhập</button></Link>
                <Link to='/cai-dat'> <button>Cài đặt</button></Link>
            </div>
        </div>
    )
}

export default Header
