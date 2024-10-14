import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

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
            {isLoaded ?
                <>
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/#works">Works</Link></li>
                                <li><Link to="/#about">About</Link></li>
                                <li><Link to="/#contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <section>
                            <h1>{restData.acf.name}</h1>
                            <p>{restData.acf.title}</p>
                            <div>
                                <p>{restData.acf.tagline}</p>
                                <p>{restData.acf.tagline_2}</p>
                            </div>
                        </section>
                    </header>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default Header