import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f3awmph', 'template_084ih4g', form.current, '7Y2dwBHIxt7I-tj_9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <FiMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>kien27062000@gmail.com</h5>
                        <a href="mailto:kien27062000@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <FaFacebookMessenger className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Kevin Phan</h5>
                        <a href="https://m.me/kien.phantrung.564" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>Phone: 647-564-6979</h5>
                        <a href="https://api.whatsapp.com/send?phone=+16475646979" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder="Your Email Address" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required> </textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
//Using EmailJS.com to send a message