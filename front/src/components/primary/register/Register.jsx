import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validate";
import { postUserRegister } from "../../../helpers/peticions";


export default function Register(){
    function handleSubmit({ name, email, birthdate, dni_number, username, password, }) { 
        const user = { name, email, birthdate, dni_number, username, password};

        postUserRegister(user)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


return (
    <div className="container">
        <h1 className="">REGISTER</h1>
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
                <Form className="form">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" className="input"/>
                    <ErrorMessage name="name" component="div" className="error"/>

                    
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" className="input"/>
                    <ErrorMessage name="email" component="div" className="error"/>


                    <label htmlFor="birthdate">Birthdate</label>
                    <Field type="date" name="birthdate" className="input"/>
                    <ErrorMessage name="birthdate" component="div" className="error"/>


                    <label htmlFor="dni_number">DNI</label>
                    <Field type="number" name="dni_number" className="input"/>
                    <ErrorMessage name="dni_number" component="div" className="error"/>


                    <label htmlFor="username">Username</label>
                    <Field type="text" name="username" className="input"/>
                    <ErrorMessage name="username" component="div" className="error"/>


                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" className="input"/>
                    <ErrorMessage name="password" component="div" className="error"/>


                    <label htmlFor="repeatPassword">Repeat password</label>
                    <Field type="password" name="repeatPassword" className="input"/>
                    <ErrorMessage name="repeatPassword" component="div" className="error"/>

                    <button 
                        type="submit" className="submitBtn">Submit
                    </button>

                </Form>
            )}
        
           </Formik>
    </div>
)
}