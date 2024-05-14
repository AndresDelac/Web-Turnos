import * as Yup from "yup";

const logInSchema =  Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
        .min(3, "Too short!")
        .max(16, "Too long!")
        .required("Password is required"),
        repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required")
    });

    export default logInSchema;

