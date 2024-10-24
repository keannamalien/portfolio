import Header from '../components/Header'
// import HeaderMenu from '../components/HeaderMenu'
import Works from '../components/Works'
import About from '../components/About'
import Footer from '../components/Footer'
import Loading from '../utilities/Loading'
import { useState, useEffect } from 'react'

import React from 'react'

const Home = () => {

    const [isLoaded, setLoadStatus] = useState(false)
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoadStatus(true);

        }, 2000);
        return () => clearTimeout(loadingTimer);

    })
    return (
        <>
            {isLoaded ?
                <>
                    <main className='site-wrapper'>
                        <Header />
                        <Works />
                        <About />
                    </main>
                    <Footer />
                </>
                :
                <Loading />
            }

        </>
    )
}

export default Home
