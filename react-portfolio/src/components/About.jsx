import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

const About = () => {
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
                    <section id="about">
                        <h2>About</h2>
                        <img src={restData.acf.about_image.url} alt="About Keanna" />
                        <article>
                            <h3>{restData.acf.about_title}</h3>
                            <p>{restData.acf.about_text}</p>
                        </article>
                    </section>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default About