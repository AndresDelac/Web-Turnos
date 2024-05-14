export default function validate(values){
    const errors = {};
    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email){
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email address"
    }
    if (!values.birthdate){
        errors.birthdate = "Required"
    }
    if (new Date(values.birthdate) > new Date()) {
        errors.birthdate = "Birthdate must be before currente date"
    }
    if(!values.dni_number){
        errors.dni_number = "Required"
    }
    if(!values.username){
        errors.username = "Required"
    }
    if(!values.password){
        errors.password = "Required"
    }
    if(!(values.password === values.repeatPassword)){
        errors.repeatPassword = "Password must match"
    }
    return errors;
}