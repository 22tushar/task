import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import {Typography, Avatar} from '@mui/material'
import styles from './style.module.css';
import Button from '../../components/button'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import axios from 'axios';
import {Link} from 'react-router-dom'

const loginSchema = Yup.object().shape({
    email : Yup
        .string()
        .required('Please enter Email')
        .email('Enter a valid email'),
    password : Yup
            .string()
            .required('Please Enter your password')
            // .matches(
            //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
})

const Login = () => {

    const initialValues = {
        email : '',
        password : '',
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        console.log(values);
        const URL = "http://localhost:8080/api/auth"
        try {
            const {data : res} = await axios.post(URL, values)
            localStorage.setItem('token', res.data);
            window.location = '/dashboard'
        } catch (error) {
            console.log(error.response.data.message);
        }

        setSubmitting(false);
    } 

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div className = {styles.lock}> <DeviceThermostatIcon fontSize = "large" /> </div>
                        <h3 className={styles.heading}> Login to your Account</h3>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema = {loginSchema}
                        >
                            {({errors, touched, isSubmitting}) => (
                                <Form className={styles.form}>
                                    <Field name="email" className={styles.input} placeholder= "Email"/>
                                    {errors.email && touched.email ? <div className = {styles.error}>{errors.email}</div> : null}
                                    <Field name = "password" className = {styles.input} placeholder= "Password"/>
                                    {errors.password && touched.password ? <div className = {styles.error} >{errors.password}</div> : null}
                                    <Button type='submit' disabled={isSubmitting} className = {styles.button} > Log in </Button>
                                </Form>
                            )}                  
                        </Formik>
                    </div>
                    <div className={styles.right}>
                        <h1> New Here </h1>
                        <Link to = '/signup'>
                        <Button className = {styles.button}> Signup </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login