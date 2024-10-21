import Header from '../components/Header'
import Works from '../components/Works'
import About from '../components/About'
import Footer from '../components/Footer'
// import Loading from '../utilities/Loading'

import React from 'react'

const Home = () => {

    return (
        <>
            <div className='site-wrapper'>
                <Header />
                <Works />
                <About />
            </div>
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </>
    )
}

export default Home
