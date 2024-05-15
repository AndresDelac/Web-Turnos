import { addUser } from "../../../redux/reducer";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from "../../../redux/reducer";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './login.module.css';
import { logInUser } from "../../../helpers/peticions";
import logInSchema from "./validate";

export default function Login() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();

    function handleSubmit({ username, password, repeatPassword }) {
        const user = { username, password, repeatPassword };
        console.log(user);
        
        logInUser(user)
            .then((res) => {
                alert(res.message);
                localStorage.setItem("userId", res.id);
                console.log(res.id);
                dispatch(addUser(res)); 
                dispatch(setLoggedInUser(true));
                navigate("/")
            })
            .catch(err => console.log(err));
    }

    if(isLoggedIn){
        navigate.push("/Citas");
        return null;
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


