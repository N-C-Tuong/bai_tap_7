import React, { useState } from 'react';
import './navbar.scss';
import { BsSearch, BsFillMicFill, BsGrid3X3Gap, BsFillBellFill, BsPersonSquare } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';
import { MdFeedback, MdKeyboard } from 'react-icons/md';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FaUserFriends, FaSignOutAlt, FaSun, FaUserShield } from 'react-icons/fa';
import { IoSettings, IoSettingsSharp, IoLanguageOutline, IoHelpCircle } from 'react-icons/io5';
import avatar from '../../assets/images/avatar.jpg';


function Navbar() {
    const [backGround, changeBackGround] = useState('bg-light');
    const handleChangeBackGround = () => {
        if (backGround === 'bg-light') {
            changeBackGround('bg-dark');
        } else {
            changeBackGround('bg-light');
        }
    }

    const [userManage, setUserManageShow] = useState(false);
    const handleShowUserManage = () => {
        setUserManageShow(!userManage);
    }

    const className = userManage === true ? '' : ' hidden';

    return (
        <nav className={'nav-bar ' + backGround}>
            <div className="search">
                <input className="search__input" type="text" placeholder="Tìm kiếm" />
                <span className="search__button"><BsSearch className="btn btn-search" /></span>
                <div className="search__voice">
                    <BsFillMicFill className="btn btn-voice" />
                </div>
            </div>
            <div className="menu">
                <BiVideoPlus className="menu__item" />
                <BsGrid3X3Gap className="menu__item" onClick={handleChangeBackGround} />
                <BsFillBellFill className="menu__item" />
                <img className="menu__item menu__item--user" src={avatar} onClick={handleShowUserManage} alt="" />
            </div>
            <div className={"user" + className}>
                <div className="user-account">
                    <img src={avatar} alt="" className="user-account__image" />
                    <div className="account-renderer">
                        <span className="account-renderer__name">Tường Nguyễn</span>
                        <a href="#" className="account-renderer__manage">Quản lý tài khoản Google của bạn</a>
                    </div>
                </div>
                <div className="user-menu">
                    <div className="menu-item">
                        <span className="menu-item__icon"><BsPersonSquare /></span>
                        <span className="menu-item__title">Kênh của bạn</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><HiCurrencyDollar /></span>
                        <span className="menu-item__title">Giao dịch mua và gói hội viên</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><IoSettings /></span>
                        <span className="menu-item__title">YouTube Studio</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><FaUserFriends /></span>
                        <span className="menu-item__title">Chuyển đổi tài khoản</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><FaSignOutAlt /></span>
                        <span className="menu-item__title">Đăng xuất</span>
                    </div>
                    <hr />
                    <div className="menu-item">
                        <span className="menu-item__icon"><FaSun /></span>
                        <span className="menu-item__title">Giao diện: Sáng</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><IoLanguageOutline /></span>
                        <span className="menu-item__title">Ngôn ngữ: Tiếng Việt</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><GrLanguage /></span>
                        <span className="menu-item__title">Địa điểm: Việt Nam</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><IoSettingsSharp /></span>
                        <span className="menu-item__title">Cài đặt</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><FaUserShield /></span>
                        <span className="menu-item__title">Dữ liệu của bạn trong YouTube</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><IoHelpCircle /></span>
                        <span className="menu-item__title">Trợ giúp</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><MdFeedback /></span>
                        <span className="menu-item__title">Gửi phản hồi</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-item__icon"><MdKeyboard /></span>
                        <span className="menu-item__title">Phím tắt</span>
                    </div>
                    <hr />
                    <div className="menu-item">
                        <span className="menu-item__title">Chế độ hạn chế: Đã tắt</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;