import React from 'react'
import './footer.css';
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Kevin Phan</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portforlio">Portfolio</a></li>
                <li><a href="#testinomials">Testinomials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com/"><BsFacebook /></a>
                <a href="https://instagram.com/"><BsInstagram /></a>
                <a href="https://twitter.com/"><SiTwitter /></a>
            </div>


        </footer>
    )
}

export default Footer