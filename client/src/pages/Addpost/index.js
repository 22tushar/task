import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import {Typography, Avatar} from '@mui/material'
import styles from './style.module.css';
import Button from '../../components/button'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import axios from 'axios';
import {Link} from 'react-router-dom'

const postSchema = Yup.object().shape({
    title : Yup
        .string()
        .required('Please enter Title'),
        // .email('Enter a valid email'),
    description : Yup
            .string()
            .required('Please enter Details '),

    author : Yup
            .string()
            .required('Please enter Author Name')
            // .matches(
            //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
})

const Addpost = () => {

    const initialValues = {
        title : '',
        description : '',
        author: '',
        status : 'unverified',
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        console.log(values);
        const URL = "http://localhost:8080/content/save"
        try {
            const {data : res} = await axios.post(URL, values)
            console.log(res);
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
                        <h3 className={styles.heading}> Create the Post</h3>
                        <Formik 
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema = {postSchema}
                        >
                            {({errors, touched, isSubmitting}) => (
                                <Form className={styles.form}>
                                    <Field name="title" className={styles.input} placeholder= "Title"/>
                                    {errors.title && touched.title ? <div className = {styles.error}>{errors.title}</div> : null}
                                    <Field  as="textarea" name = "description" className = {styles.input2} placeholder= "Description"/>
                                    {errors.description && touched.description ? <div className = {styles.error} >{errors.description}</div> : null}
                                    <Field name = "author" className = {styles.input} placeholder= "Enter Author Name"/>
                                    {errors.author && touched.author ? <div className = {styles.error} >{errors.author}</div> : null}
                                    <Button type='submit' disabled={isSubmitting} className = {styles.button} > Create </Button>
                                </Form>
                            )}                  
                        </Formik>
                    </div>
                    {/* <div className={styles.right}>
                        <h1> New Here </h1>
                        <Link to = '/signup'>
                        <Button className = {styles.button}> Signup </Button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Addpost