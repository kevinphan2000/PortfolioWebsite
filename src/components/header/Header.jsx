import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../rootcode/me.jpg'
import HeaderSocials from './HeaderSocials';
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Welcome to the Portfolio Website</h5>
                <h1>KEVIN PHAN</h1>
                <h5 className="text-light">Software Engineer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header