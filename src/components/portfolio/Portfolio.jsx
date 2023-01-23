import React from 'react'
import './portfolio.css'
import IMG1 from '../../rootcode/portfolio1.jpg'
import IMG2 from '../../rootcode/portfolio2.jpg'
import IMG3 from '../../rootcode/portfolio3.jpg'
import IMG4 from '../../rootcode/portfolio4.jpg'
import IMG5 from '../../rootcode/portfolio5.png'
import IMG6 from '../../rootcode/portfolio6.jpg'
{/*Credit by Dribbble.com */ }

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Facebook Clone Front-End Website',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/AndreaJelic'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Spotify Clone Front-End Website',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/AndreaJelic'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Calculator Website',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/AndreaJelic'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Sudoku Solving Game',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/AndreaJelic'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Flappy Bird Game using Racket',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/AndreaJelic'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Chat Server coding in C',
        github: 'https://github.com/',
        demo: 'https://dribbble.com/AndreaJelic'
    }

]



const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a hreft={github} className="btn" target="_blank">GitHub</a>
                                    <a hreft={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }


            </div>

        </section>
    )
}

export default Portfolio