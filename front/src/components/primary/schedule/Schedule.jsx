import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postAppointment, updateAppointment } from "../../../helpers/peticions";
import validateApointment from "./validate";
import { useDispatch, useSelector } from "react-redux";
import styles from "./schedule.module.css"


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
      <h1 className={styles.title1}>Agendar Cita</h1>
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
            <div className={styles.campos}>
            <label htmlFor="date">Fecha</label>
            <Field type="date" name="date" className={styles.input} />
            <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div className={styles.campos}>
            <label htmlFor="time">Hora</label>
            <Field type="time" name="time" className={styles.input} />
            <ErrorMessage name="time" component="div" className="error" />
            </div>

            <div className={styles.campos}>
            <label htmlFor="description">Descripcion</label>
            <Field type="text" name="description" className={styles.input} />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Agendar
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </main>
  );
}

