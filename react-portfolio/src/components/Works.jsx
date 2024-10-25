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
            {isLoaded &&
                <>
                    <section id="works" className='works-section'>
                        <div className='section-title'>
                            <h2>Works</h2>
                            <div className='separator works'>
                            </div>
                        </div>
                        <ul className="work-gallery">
                            {/* loop through all posts */}
                            {restData.map(post =>
                                <li key={post.id}>
                                    <div className='work-number'>{post.acf.work_number}</div>
                                    <article className="work-item">
                                        <Link to={`work/${post.slug}`}>
                                            <img src={post.acf.work_image.url} alt={post.acf.work_image.alt} />
                                            <div className='title-line'>
                                            </div>
                                            <div className='work-title'>
                                                <h3>{post.title.rendered}</h3>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 12h16" /><path d="M13 5l7 7-7 7" /></svg>
                                            </div>
                                            <div className='title-line'>
                                            </div>
                                        </Link>

                                        <p className="tools-used">
                                            {/* Loop through the tools array */}
                                            {post.acf.tools.map((tool, index) => (
                                                <span key={index} className='tool'>
                                                    {tool}
                                                </span>
                                            ))}
                                        </p>
                                    </article>
                                </li>
                            )}
                        </ul>
                        <Link className='arch-link'>
                            <p>You can also check out my <strong>architectural works.</strong></p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 12h16" /><path d="M13 5l7 7-7 7" /></svg>
                        </Link>
                    </section>
                </>
            }
        </>
    )
}

export default Works