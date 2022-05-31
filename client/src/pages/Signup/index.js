import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import {Typography, Avatar} from '@mui/material'
import styles from './style.module.css';
import Button from '../../components/button'
import axios from 'axios';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import {useNavigate, Link} from 'react-router-dom'


const loginSchema = Yup.object().shape({
    firstName : Yup
        .string()
        .required('Please enter your Name'),
    lastName : Yup
        .string()
        .required('Please enter your Last Name'),
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

    const navigate = useNavigate();

    const initialValues = {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        console.log(values);
        try {
            const URL = "http://localhost:8080/api/user"
            const {data : res} = await axios.post(URL, values);
            navigate('/login')
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500)
                console.log(error.response.data.message);
                // setFieldError('backend', error.response.data.message);

        }
        setSubmitting(false);
    } 

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div className = {styles.lock}> <DeviceThermostatIcon fontSize = "large" /> </div>
                        <h3 className={styles.heading}> Signup to your Account</h3>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema = {loginSchema}
                        >
                            {({errors, touched, isSubmitting}) => (
                                <Form className={styles.form}>
                                    <Field name="firstName" className={styles.input} placeholder= "First Name"/>
                                        {errors.firstName && touched.firstName ? <div className = {styles.error}>{errors.firstName}</div> : null}
                                    <Field name="lastName" className={styles.input} placeholder= "Last Name"/>
                                        {errors.lastName && touched.lastName ? <div className = {styles.error}>{errors.lastName}</div> : null}
                                    <Field name="email" className={styles.input} placeholder= "Email"/>
                                    {errors.email && touched.email ? <div className = {styles.error}>{errors.email}</div> : null}
                                    <Field name = "password" className = {styles.input} placeholder= "Password"/>
                                    {errors.password && touched.password ? <div className = {styles.error} >{errors.password}</div> : null}
                                    {errors.backend  ? <div className = {styles.error} >{errors.backend}</div> : null}
                                    <Button type='submit' disabled={isSubmitting} className = {styles.button} > Sign up </Button>
                                </Form>
                            )}                  
                        </Formik>
                    </div>
                    <div className={styles.right}>
                        <h1> Already a member </h1>
                        <Link to = '/login'>
                        <Button className = {styles.button}> Login </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login