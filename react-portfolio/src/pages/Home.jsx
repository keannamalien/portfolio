import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'

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
                    <section>
                        <h1>{restDataPage.acf.name}</h1>
                        <p>{restDataPage.acf.title}</p>

                        <div>
                            <p>{restDataPage.acf.tagline}</p>
                            <p>{restDataPage.acf.tagline_2}</p>
                        </div>

                    </section>

                    <section>
                        <div>
                            <img src={restDataPosts[2].acf.work_image[0].url} alt="image1" />
                            <p>{restDataPosts[2].title.rendered}</p>

                        </div>
                        <img src={restDataPosts[2].acf.work_image[1].url} alt="image2" />
                        {restDataPosts[1].title.rendered}
                        <img src={restDataPosts[2].acf.work_image[2].url} alt="image3" />
                        {restDataPosts[0].title.rendered}

                    </section>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default Home
