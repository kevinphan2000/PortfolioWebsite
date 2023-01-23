import React from 'react'
import './service.css';
import { FiCheck } from 'react-icons/fi'
const Service = () => {
    return (
        <section id="services">
            <h5>What I offer</h5>
            <h2>Service</h2>

            <div className="container service__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>

                    </ul>
                </article>
                {/*END OF FIRST PART*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>

                    </ul>
                </article>
                {/*END OF SECOND PART*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur, adipiscing elit</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Service