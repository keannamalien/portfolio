import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'


import React from 'react'

const Home = () => {
    const restPathPage = restBase + 'pages/8?acf_format=standard'
    const restPathPosts = restBase + 'posts?acf_format=standard'
    const [restDataPage, setDataPage] = useState([])
    const [restDataPosts, setDataPosts] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response_page = await fetch(restPathPage)
            const response_posts = await fetch(restPathPosts)
            if (response_page.ok && response_posts.ok) {
                const restDataPage = await response_page.json()
                const restDataPosts = await response_posts.json()

                setDataPage(restDataPage)
                setDataPosts(restDataPosts)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPathPage, restPathPosts])

    return (
        <>
            {isLoaded ?
                <>
                    {/* Header Section */}
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="#works">Works</Link></li>
                                <li><Link to="#about">About</Link></li>
                                <li><Link to="#contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <section>
                            <h1>{restDataPage.acf.name}</h1>
                            <p>{restDataPage.acf.title}</p>
                            <div>
                                <p>{restDataPage.acf.tagline}</p>
                                <p>{restDataPage.acf.tagline_2}</p>
                            </div>
                        </section>
                    </header>


                    {/* Works Section */}
                    <section id="works">
                        <h2>Works</h2>
                        <div className="work-gallery">
                            <article className="work-item">
                                <Link>
                                    <img src={restDataPosts[0].acf.work_image[0].url} alt={restDataPosts[0].title.rendered} />
                                    <h3>{restDataPosts[0].title.rendered}</h3>
                                    {/* <p className="tools-used">
                                    <span>React</span> |
                                    <span>Adobe XD</span> |
                                    <span>Photoshop</span>
                                </p> */}
                                </Link>
                            </article>

                            <article className="work-item">
                                <Link>
                                    <img src={restDataPosts[1].acf.work_image[0].url} alt={restDataPosts[1].title.rendered} />
                                    <h3>{restDataPosts[1].title.rendered}</h3>
                                    {/* <p className="tools-used">
                                    <span>HTML</span> |
                                    <span>CSS</span> |
                                    <span>JavaScript</span>
                                </p> */}
                                </Link>
                            </article>

                            <article className="work-item">
                                <Link>
                                    <img src={restDataPosts[2].acf.work_image[0].url} alt={restDataPosts[2].title.rendered} />
                                    <h3>{restDataPosts[2].title.rendered}</h3>
                                    {/* <p className="tools-used">
                                    <span>HTML</span> |
                                    <span>CSS</span> |
                                    <span>JavaScript</span>
                                </p> */}
                                </Link>
                            </article>
                        </div>
                        <p>You can also check out my <Link to="#">architectural work</Link>.</p>
                    </section>


                </>
                :
                <Loading />
            }
        </>
    )
}

export default Home
