import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'
// import HeaderMenu from './HeaderMenu'

const Header = () => {

    const restPath = restBase + 'pages/8?acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

    return (
        <>
            {isLoaded &&
                <>
                    <header id="top">
                        {/* <HeaderMenu /> */}
                        <section className='title-container'>
                            <div className='header-title'>
                                <h1>{restData.acf.name}</h1>
                                <p>{restData.acf.title}</p>
                            </div>
                            <div className='separator'>
                            </div>
                            <div className='tagline'>
                                <span className='bracket'>{'{'}</span>
                                <div className='tagline-text'>
                                    <p className='line-1'>{restData.acf.tagline}</p>
                                    <p className='line-2'>{restData.acf.tagline_2}</p>
                                </div>
                                <span className='bracket'>{'}'}</span>
                            </div>

                            <Link to='/#works' className='see-my-works'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6" /><path d="M6 8v10h10" /></svg>
                                <span className='see-my-works-text'>{restData.acf.see_my_works}</span>
                            </Link>
                        </section>
                    </header>
                </>
            }
        </>
    )
}

export default Header