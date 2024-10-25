import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

const Footer = () => {
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
                    <footer>
                        <section id="contact" className='contact-section'>
                            <h2 className='contact-title'>Where you can find me</h2>
                            <ul className='contact-list'>
                                <li className='contact-item'>
                                    <div className='link-line'></div>
                                    <Link to='https://github.com/keannamalien'>
                                        GITHUB
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ai ai-ArrowUpRight" ><path d="M18 6L6 18" /><path d="M8 6h10v10" /></svg>
                                    </Link>
                                </li>
                                <li className='contact-item'>
                                    <div className='link-line'></div>
                                    <Link to='https://www.linkedin.com/in/keannabayaua/'>
                                        LINKEDIN
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ai ai-ArrowUpRight" ><path d="M18 6L6 18" /><path d="M8 6h10v10" /></svg>
                                    </Link>
                                </li>
                                <li className='contact-item'>
                                    <div className='link-line'></div>
                                    <a href='mailto:keannamalien@gmail.com'>
                                        EMAIL
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ai ai-ArrowUpRight" ><path d="M18 6L6 18" /><path d="M8 6h10v10" /></svg>
                                    </a>
                                    <div className='link-line'></div>
                                </li>
                            </ul>
                        </section>
                    </footer>
                </>
            }
        </>
    )
}

export default Footer