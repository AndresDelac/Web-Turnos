import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postAppointment } from "../../../helpers/peticions";
import validateApointment from "./validate";

export default function Schedule(){
    function handleSubmit({date, time, description}){
        const appointment = {date, time, description}

        postAppointment(appointment)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))

        console.log(appointment.date);
    }

    return(
        <div className="container">
            <h1>Agendar Cita</h1>
            <Formik
            initialValues={{
                date: "",
                time: "",
                description: ""
            }}
            validate={validateApointment}
            onSubmit={handleSubmit}>

            {()=> (
                <Form className="form">

                    <label htmlFor="date">Fecha</label>
                    <Field type="date" name="date" className="input"/>
                    <ErrorMessage name="date" component="div" className="error"/>
                    
                    <label htmlFor="time">Hora</label>
                    <Field type="time" name="time" className="input"/>
                    <ErrorMessage name="time" component="div" className="error"/>
                
                    <label htmlFor="description">Descripcion</label>
                    <Field type="text" name="description" className="input"/>
                    <ErrorMessage name="description" component="div" className="error"/>

                    <button type="submit" className="submitBtn">
                        Agendar
                    </button>

                </Form>
            )}
            </Formik>
        </div>
    )
}