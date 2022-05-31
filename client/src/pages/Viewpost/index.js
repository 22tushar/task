import React from 'react'
import card from '../../components/card'
import axios from 'axios'

const post = async() => {
    const URL = 'http://localhost:8080/content/view'
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        return new Error(error)
        // console.error(error)
    }
}



const Viewpost = () => {
    const [data, setData] = React.useState()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        post.then((response) => {
            setData(response)
        })
    }, [])


    return (
        <>
            {data && data.map((post, i) => (
                <card title = {post.title} description = {post.description} author = {post.author}/>
            ))}
        </>
    )
}