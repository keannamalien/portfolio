import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'

const Works = () => {
    const restPath = restBase + 'posts?acf_format=standard&order=asc'
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
                    <section id="works" className='works-section'>
                        <h2>Works</h2>
                        <div className='separator works'>
                        </div>
                        <div className="work-gallery">
                            {/* loop through all posts */}
                            {restData.map(post =>
                                <li>
                                    <article key={post.id} className="work-item">
                                        <Link to={`work/${post.id}`}>
                                            <img src={post.acf.work_image.url} alt={post.acf.work_image.alt} />
                                            <h3>{post.title.rendered}</h3>
                                        </Link>
                                        {/* <p className="tools-used">
                                    <span>React</span> |
                                    <span>Adobe XD</span> |
                                    <span>Photoshop</span>
                                </p> */}
                                    </article>
                                </li>
                            )}
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

export default Works