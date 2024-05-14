import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './loginStyles.css';
import { logInUser } from "../../../helpers/peticions";
import logInSchema from "./validate";

export default function Login(){
    function handleSubmit({ username, password, repeatPassword }) { 
        const user = { username, password, repeatPassword };

        logInUser(user)
        .then((res) => {alert(res.message);
            
        localStorage.setItem("userId", res.id)})
        .catch(err => console.log(err));
    }
    return (
        <div className="container">
            <h1>LOGIN</h1>
            <Formik
            initialValues={{
                username: "",
                password: "",
                repeatPassword: ""
            }}
            validationSchema={logInSchema}
            onSubmit={handleSubmit}>

                {()=> (
                <Form className="form">

                    <label htmlFor="username">Username</label>
                    <Field type="text" name="username" className="input"/>
                    <ErrorMessage name="username" component="div" className="error"/>

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" className="input"/>
                    <ErrorMessage name="password" component="div" className="error"/>

                    <label htmlFor="repeatPassword">Repeat password</label>
                    <Field type="repeatPassword" name="repeatPassword" className="input"/>
                    <ErrorMessage name="repeatPassword" component="div" className="error"/>

                    <button type="submit" className="submitBtn">Log In</button>

                </Form>

                )}
            </Formik>
        </div>
    )
}







// const [userData, setUserData] = useState({
//     username: "",
//     password: ""
// });
// // console.log(userData);

// const [errors, setErrors] = useState({
//     username: "Username is required",
//     password: "Password is required"
// })
// // console.log(errors);


// const handlerInputChange = (event) => {
// // console.log(event);

// const { name, value } = event.target;
// setUserData({
//    ...userData,
//     [name]: value
// });

// const errors = validate(userData);
// setErrors(errors);
// }

// const handlerSubmit = (event) => {
//     event.preventDefault();
//     alert(`username: ${userData.username} Password: ${userData.password}`);
// }





































































