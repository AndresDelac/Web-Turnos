import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postAppointment, updateAppointment } from "../../../helpers/peticions";
import validateApointment from "./validate";
import { useDispatch, useSelector } from "react-redux";


export default function Schedule() {

  const userId = useSelector((state) => state.userId); 
  
 
  const dispatch = useDispatch();

  function handleSubmit({ date, time, description }) {
    const appointment = { date, time, description };
    console.log(appointment);

    postAppointment(appointment, userId)
      .then((res) => {
        alert(res.message);
        dispatch(updateAppointment([
             ...res.data.user.appointments, 
          {

          time: res.data.time, 
          date: res.data.date, 
          description: res.data.description ,
          id: res.data.id,
        }
        ])
      )

        setServerResponse(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main>
    <div className="container">
      <h1>Agendar Cita</h1>
      <Formik
        initialValues={{
          date: "",
          time: "",
          description: ""
        }}
        validate={validateApointment}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <label htmlFor="date">Fecha</label>
            <Field type="date" name="date" className="input" />
            <ErrorMessage name="date" component="div" className="error" />

            <label htmlFor="time">Hora</label>
            <Field type="time" name="time" className="input" />
            <ErrorMessage name="time" component="div" className="error" />

            <label htmlFor="description">Descripcion</label>
            <Field type="text" name="description" className="input" />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />

            <button type="submit" className="submitBtn">
              Agendar
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </main>
  );
}

  
//     const userId = useSelector((state)=> state.userId)

// const [appointment, setAppointment] = useState({
//     date:"",
//     time:"",
//     description:"",
// });

// const [errors, setErrors] =useState({
//     date:"",
//     time:"",
//     description:"",
// })

// function handleChange(e) {
//     const newAppointment = {...appointment, [e.target.name]:e.target.value};
//     const validateErrors = validateAppointment(newAppointment);
//     setErrors({...validateErrors})
// }

// function handleSubmit (e) {
//     e.preventEventDefault();
//     if (Object.keys(errors).length === 0) {
//         postAppointment(appointment, userId)
//         .then((res) => {
//             alert(res.message);
//             setAppointment({
//                 date:"",
//                 time:"",
//                 description:"",
//             });
//         })
//         .catch((err)=> alert(err.message));
//     }else {
//         alert ("Revisa, hay errores en el formulario")
//     }
// }



// return (
//     <form className="" onSubmit={handleSubmit}>
//         <label htmlFor="date">
//             Date:
//             <input 
//                 type="date" 
//                 name="date"
//                 value={appointment.date}
//                 onChange={handleChange}
//                 className=""
//             />
//             <p className="error">{errors.date}</p>
//         </label>
//         <label htmlFor="time">
//             Date:
//             <input 
//                 type="time" 
//                 name="time"
//                 value={appointment.time}
//                 onChange={handleChange}
//                 className=""
//             />
//             <p className="error">{errors.time}</p>
//         </label>
//     </form>
// )












































