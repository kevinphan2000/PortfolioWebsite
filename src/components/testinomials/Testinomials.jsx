import React from 'react'
import './testinomials.css'
import AV1 from '../../rootcode/avatar1.jpg'
import AV2 from '../../rootcode/avatar2.jpg'
import AV3 from '../../rootcode/avatar3.jpg'
import AV4 from '../../rootcode/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AV1,
        name: 'Ariana Grande',
        review: 'Thank you very much for sharing your experience with us.We are really happy that your interaction with our brand was so positive.'
    },
    {
        avatar: AV2,
        name: 'Kiri Sam',
        review: 'Having you and your family [stay/dine] with us was a pleasure for [company]. We really value the fact that you are being so open with us and taking the time to share your feedback.'
    },
    {
        avatar: AV3,
        name: 'Jack Sully',
        review: 'We’re happy you are satisfied with the quality of our [product/service]. It means a lot! Thank you for choosing [company], we’re so thankful for outstanding customers like you.'
    },
    {
        avatar: AV4,
        name: 'David Pham',
        review: 'Thank you for sharing your story and experience with us! I’m so happy that our [product/service] has made such a difference for you.'
    }
]


const Testinomials = () => {
    return (
        <section id="testinomial">
            <h5>Review from Peers</h5>
            <h2>Testinomial</h2>

            <Swiper className="container testimonials__container"
                //install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </section>
    )
}
/*Using the swiperjs.com to install the swiper in React */
export default Testinomials