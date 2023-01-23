import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Experiences from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Services from './components/service/Service';
import Testinomials from './components/testinomials/Testinomials';
const app = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experiences />
            <Services />
            <Portfolio />
            <Testinomials />
            <Contact />
            <Footer />
        </div>
    )
}

export default app