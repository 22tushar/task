import React from 'react'
import styles from './style.module.css'
import {Navigate, Link} from 'react-router-dom'

const Dashboard = () => {
    // const navigate = useNavigate()
    return (
       <>
        {/* <h1> Hello dashboard</h1> */}
        <Link to='/addpost'>Addpost</Link>
        <br/>
        <Link to='/viewpost'>viewpost</Link>
        <br/>
        <Link to='/verifyPost'>verifyPost</Link>
       </>
    )
}

export default Dashboard