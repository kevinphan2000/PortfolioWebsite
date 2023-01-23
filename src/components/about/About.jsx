import React from 'react'
import './about.css'
import DEV from '../../rootcode/dev.PNG'
import { FaAward } from "react-icons/fa"
import { MdCastForEducation } from "react-icons/md"
import { HiFolder } from "react-icons/hi"
const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={DEV} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about-icon" />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <MdCastForEducation className="about-icon" />
                            <h5>Education</h5>
                            <small>Major: Computer Science</small>
                        </article>

                        <article className="about__card">
                            <HiFolder className="about-icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p className="about__paragraph">
                        I am a junior Full-Stack developer who is passionate in algorithms, coding and problem handling with logics. Love ReactJs, CSS, Typescript for Frontend; Mongodb, NodeJS for Backend and will continue to learn more in the future.
                        My background: I am a last year student in University of Toronto majoring in Computer Science. Finally, thank you for visiting my website. If you have any comments or questions, welcome to add them at the end of this page.
                    </p>
                    <a href="#contact" className="btn btn-primary"> Let's Talk</a>
                </div>
            </div>

        </section >
    )
}

export default About