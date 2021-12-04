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
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://github.com/AnhTuanPham69">My Github</a>
                        <a href="https://join.skype.com/invite/vbowtxWoUj1H">My Skype</a>
                        <a href="https://www.linkedin.com/in/anh-tu%E1%BA%A5n-ph%E1%BA%A1m-3b043921b/">My Linkedin</a>
                        <a href="https://www.themoviedb.org/">Website API is obtained at https://www.themoviedb.org/</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
