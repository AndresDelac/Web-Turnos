import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllAppointments, updateAppointment } from '../../../helpers/peticions'; 
import { useDispatch } from 'react-redux';
import styles from "./turnos.module.css";
import { cancelAppointments } from '../../../redux/slice';


export default function MisTurnos() {

  const appointments = useSelector((state) => state.appointments );
  
  const dispatch = useDispatch();


  const handleCancelAppointment = async (appointmentId) => {
    console.log(appointmentId);
    try {
      const response = await updateAppointment(appointmentId);
      dispatch(cancelAppointments(appointmentId));
      alert("Cita cancelada");
      
    } catch (error) {
      console.error('Error al cancelar la cita:', error);
    }
  }
 
 

  return (
    <main>
      <div>
        <h1>Mis turnos</h1>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className={styles.cita}>
              <p className={styles.campos}>Date: {appointment.date}</p> 
              <p className={styles.campos}>Time: {appointment.time}</p>
              <p className={styles.campos}>Description: {appointment.description}</p>
              <p className={styles.campos}> Status: {appointment.status}</p>
              {appointment.status !== "CANCELADO" && (
                <button onClick={() => handleCancelAppointment(appointment.id)} className={styles.btn}>Cancelar cita</button>
              )}
            </div> 
          ))
        ) : (
          <p>No hay citas registradas </p>
        )}
      </div>
    </main>
  );
}


