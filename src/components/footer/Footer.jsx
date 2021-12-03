import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">AT-Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <a href="https://github.com/AnhTuanPham69">Contact us</a>
                        <a href="https://github.com/AnhTuanPham69">Term of services</a>
                        <a href="https://github.com/AnhTuanPham69">About us</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://github.com/AnhTuanPham69">Live</a>
                        <a href="https://github.com/AnhTuanPham69">FAQ</a>
                        <a href="https://github.com/AnhTuanPham69">Premium</a>
                        <a href="https://github.com/AnhTuanPham69">Pravacy policy</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://github.com/AnhTuanPham69">You must watch</a>
                        <a href="https://github.com/AnhTuanPham69">Recent release</a>
                        <a href="https://github.com/AnhTuanPham69">Top IMDB</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
