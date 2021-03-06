import React from 'react'
import MediaCard from '../../components/card'
import axios from 'axios'





const Viewpost = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        const URL = 'http://localhost:8080/content/view'

         axios.get(URL)
        .then((response) => {
            
            console.log(response)
            setData(response.data.posts)
        })
        .catch((error) => {
            console.log(error);
        })
        // return response.data;
    }, [setData])

    console.log(data);

    return (
        <>
            <h1>Post</h1>
            {data && data.map((post, i) => {
                return (
                <MediaCard key = {i} title = {post.title} description = {post.description} author = {post.author}/>
            )})}
        </>
    )
}

export default Viewpost