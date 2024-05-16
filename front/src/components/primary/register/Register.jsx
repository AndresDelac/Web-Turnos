import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validate";
import { postUserRegister } from "../../../helpers/peticions";
import styles from "./register.module.css";
import { Navigate } from "react-router";


import { useNavigate } from 'react-router-dom';

export default function Register() {
    
    const navigate = useNavigate();

    function handleSubmit({ name, email, birthdate, dni_number, username, password }) { 
        const user = { name, email, birthdate, dni_number, username, password };

        postUserRegister(user)
        .then((res) => {
            alert(res.message);
            // localStorage.setItem("userId", res.id);
            navigate("/LogIn");
        })
        .catch(err => console.log(err));
    }




return (
    <section className={styles.container1}>
        <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                dni_number: "",
                username: "",
                password: "",
                repeatPassword: "",
            }}
            validate={validate}
            onSubmit={handleSubmit}>

            {() => (
                
                <div className={styles.form}>

                <Form className="form">
                <h1 className="">REGISTER</h1>
                    <div className={styles.inputContainer}>
                    <Field type="text" name="name" className="input"/>
                    <label htmlFor="name">Name</label>
                    <ErrorMessage name="name" component="div" className={styles.error}/>
                    </div>
                    
                    <div className={styles.inputContainer}>
                    <Field type="email" name="email" className="input"/>
                    <label htmlFor="email">Email</label>
                    <ErrorMessage name="email" component="div" className={styles.error}/>
                    </div>

                    <div className={styles.inputContainer}>
                    <Field type="date" name="birthdate" className={styles.formDate} cals/>
                    <label htmlFor="birthdate">Birthdate</label>
                    <ErrorMessage name="birthdate" component="div" className={styles.error}/>
                    </div>

                    <div className={styles.inputContainer}>
                    <Field type="number" name="dni_number" className="input"/>
                    <label htmlFor="dni_number">DNI</label>
                    <ErrorMessage name="dni_number" component="div" className={styles.error}/>        
                    </div>

                    <div className={styles.inputContainer}>
                    <Field type="text" name="username" className="input"/>
                    <label htmlFor="username">Username</label>
                    <ErrorMessage name="username" component="div" className={styles.error}/>
                    </div>

                    <div className={styles.inputContainer}>
                    <Field type="password" name="password" className="input"/>
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name="password" component="div" className={styles.error}/>
                    </div>

                    <div className={styles.inputContainer}>
                    <Field type="password" name="repeatPassword" className="input"/>
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <ErrorMessage name="repeatPassword" component="div" className={styles.error}/>
                    </div>
                    
                    <button 
                        type="submit" className={styles.submitBtn}>Submit
                    </button>

                </Form>
            </div>

            )}
        
        </Formik>
    </section>
)
}