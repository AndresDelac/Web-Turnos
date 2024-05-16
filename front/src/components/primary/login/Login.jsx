import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './login.module.css';
import { logInUser } from "../../../helpers/peticions";
import logInSchema from "./validate";
import { setUserId, updateAppointments } from '../../../redux/slice';

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleSubmit({ username, password, repeatPassword }) {
        logInUser({username, password})
        .then((res)=> {
            alert(res.message);
            console.log(res);
            localStorage.setItem("userId", res.user.id)
            dispatch(setUserId(res.user.id));
            dispatch(updateAppointments(res.user.appointments))
            navigate("/");
        })
        .catch((err)=> alert(err.response.data.message));
    }

    return (
        <section className={styles.container1}>
        
            <Formik
            initialValues={{
                username: "",
                password: "",
                repeatPassword: ""
            }}
            validationSchema={logInSchema}
            onSubmit={handleSubmit}>

                {()=> (
                    
                    //RENDER
                <div className={styles.form}>
                <Form>
                        <h1>LOGIN</h1>
                    <div className={styles.inputContainer}>
                    <Field type="text" name="username"/>
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

                    <div>
                    <button type="submit" className={styles.submitBtn}>
                        Log In
                        </button>
                    </div>
                </Form>
                </div>
                )}

            </Formik>
        </section>
    )
}


