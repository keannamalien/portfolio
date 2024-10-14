import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

const Footer = () => {
    const restPath = restBase + ''
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
                    {/* <footer>
                        <section id="contact">
                            <h2>Where You Can Find Me</h2>
                            <ul>
                                <li><Link to={restData.acf.github}>GitHub</Link></li>
                                <li><Link to={restData.acf.linkedin}>LinkedIn</Link></li>
                                <li><a href={`mailto:${restData.acf.email}`}>Email</a></li>
                            </ul>
                        </section>
                    </footer> */}
                </>
                :
                <Loading />
            }
        </>
    )
}

export default Footer