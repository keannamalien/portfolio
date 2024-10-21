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
            {isLoaded ?
                <>
                    <footer>
                        <section id="contact" className='contact-section'>
                            <h2>Where You Can Find Me</h2>
                            <ul>

                                <li>
                                    <div className='link-line'></div>
                                    <Link >GitHub</Link>
                                </li>
                                <li>
                                    <div className='link-line'></div>
                                    <Link >LinkedIn</Link>
                                </li>

                                <li>
                                    <div className='link-line'></div>
                                    <Link>LinkedIn</Link>
                                </li>
                                <div className='link-line'></div>

                            </ul>
                        </section>
                    </footer>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default Footer