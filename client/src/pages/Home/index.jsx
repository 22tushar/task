// import { Typography, Grid , Button} from "@mui/material"
import styles from './style.module.css'
// import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../components/button'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className = {styles.body} style = {{height: '100vh'}} >
                <div className = {styles.inner}>
                    <div className = {styles.main}>
                        <img src = './logo.png' alt = 'logo' className = {styles.mainImage}></img>
                        <img src = './logo2.png' alt = 'logo2' className = {styles.secondImage}></img>
                    </div>

                    <div >
                        <Link to = '/login'>
                        <Button className = {styles.button}> Get Started <ArrowForwardIcon/> </Button>
                        </Link>
                    </div>
                </div>
                {/* <h1 className = "heading" > Hello </h1> */}
            </div>
        </>
    )
}

export default Home;