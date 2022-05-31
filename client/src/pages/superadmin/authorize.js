import React from 'react'
import MediaCard from '../../components/card2'
import axios from 'axios'





const VerifyPost = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        const URL = 'http://localhost:8080/content/unverified'

         axios.get(URL)
        .then((response) => {
            
            console.log(response)
            setData(response.data.posts)
        })
        .catch((error) => {
            console.log(error);
        })
        // return response.data;
    }, [])

    console.log(data);

    return (
        <>
            <h1>Post</h1>
            {data && data.map((post, i) => {
                return (
                <MediaCard key = {i} title = {post.title} description = {post.description} author = {post.author}  id = {post._id}/>
            )})}
        </>
    )
}

export default VerifyPost