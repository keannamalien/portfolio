import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Work() {

    const restPath = restBase + `posts?id=${id}acf_format=standard&order=asc`
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const { id } = useParams()

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
                    <main>
                    </main>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default Work