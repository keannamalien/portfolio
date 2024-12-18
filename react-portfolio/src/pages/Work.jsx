import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Loading from '../utilities/Loading'




function Work() {

    const { slug } = useParams()
    const restPath = restBase + `posts?slug=${slug}&acf_format=standard&order=asc`
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

    if (!restData || restData.length === 0 || !restData[0]?.acf) {
        return <p>Ongoing project, check back later to see the final product.</p>;
    }

    return (
        <>
            {isLoaded &&
                <>
                    <main className='work-wrapper' id="site-main">
                        <div className='work-overview'>
                            <div className='work-hero'>
                                <video className='video-hero' autoPlay muted>
                                    <source src={restData[0].acf.work_hero_image.url} alt={restData[0].acf.work_hero_image.alt} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <h1>{restData[0].title.rendered}</h1>
                            <p>{restData[0].acf.project_overview}</p>
                            <ul className='work-tools'>
                                {restData[0].acf.tools.map((tool, index) => (
                                    <li key={index} className='work-tool'>
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <section className='features'>
                            {restData[0]?.acf?.features && Array.isArray(restData[0].acf.features) && restData[0].acf.features.length > 0 ? (
                                restData[0].acf.features.map((feature, index) => (
                                    <div key={index} className='feature-item'>
                                        <div className='feature-text'>
                                            {/* Feature Title */}
                                            <h2 className='feature-title'>{feature.feature_title}</h2>

                                            {/* Feature Description */}
                                            <p className='feature-description'>{feature.feature_description}</p>
                                        </div>

                                        {/* Feature Images  */}
                                        {Array.isArray(feature.feature_images) && feature.feature_images.length > 0 &&
                                            feature.feature_images.some(imageObj => imageObj.feature_image?.url) && (
                                                <div
                                                    className={`feature-images-wrapper ${feature.feature_images.length > 1 ? 'multiple-images' : 'single-image'}`}
                                                >
                                                    {feature.feature_images
                                                        .filter(imageObj => imageObj.feature_image?.url)
                                                        .map((imageObj, imgIndex) => (
                                                            <div key={imgIndex} className='feature-image'>
                                                                <img
                                                                    src={imageObj.feature_image.url}
                                                                    alt={imageObj.feature_image.alt}
                                                                />
                                                            </div>
                                                        ))}
                                                </div>
                                            )}

                                    </div>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                            <div className='takeaway'>
                                <h2>{restData[0].acf.takeaway}</h2>
                                <p>{restData[0].acf.takeaway_text}</p>
                            </div>
                        </section>
                    </main>
                </>
            }
        </>
    )
}

export default Work