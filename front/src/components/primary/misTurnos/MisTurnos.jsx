import { useSelector } from 'react-redux';
import { getUserById, updateAppointment } from '../../../helpers/peticions'; 
import { useDispatch } from 'react-redux';
import styles from "./turnos.module.css";
import { cancelAppointments, updateAppointments } from '../../../redux/slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MisTurnos() {
  const  userId = useSelector ((state)=> state.userId)

  const appointments = useSelector((state) => state.appointments );

  
  const dispatch = useDispatch();

  useEffect(()=> { 
    return async () => {
      const  res = await getUserById(userId)
      dispatch (updateAppointments(res.appointments))
    
    }
  }, [])

  const handleCancelAppointment = async (appointmentId) => {
    console.log(appointmentId);
    try {
      await updateAppointment(appointmentId)
      const  res = await getUserById(userId)
      dispatch (updateAppointments(res.appointments))
      // dispatch(cancelAppointments(appointmentId));
      // const response = await updateAppointment(appointmentId); 
      alert("Cita cancelada");
      
    } catch (error) {
      console.error('Error al cancelar la cita:', error);
    }
  }
 
 

  return (
    <main>
      <div>
        <h1 className={styles.title1}>Mis turnos</h1>
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
          <p className={styles.logInAlert}>No hay citas registradas </p>
        )}
      </div>
    </main>
  );
}


