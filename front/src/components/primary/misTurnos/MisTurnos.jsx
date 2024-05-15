import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllAppointments, updateAppointment } from '../../../helpers/peticions'; 
import styles from "./turnos.module.css";

export default function MisTurnos() {
  const [misTurnos, setMisTurnos] = useState([]);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    if (userId) {
      getAllAppointments(userId)
        .then((turnos) => setMisTurnos(turnos))
        .catch((error) => console.error('Error al obtener los turnos:', error));
    }
  }, [userId]);

  const handleCancelAppointment = async (appointmentId) => {
    console.log(appointmentId);
    try {
      const response = await updateAppointment(appointmentId);
      setMisTurnos((prevTurnos) =>
        prevTurnos.map((turno) =>
          turno.id === appointmentId ? { ...turno, status: "CANCELLED" } : turno
        )
      );
      alert("Cita cancelada");
    } catch (error) {
      console.error('Error al cancelar el turno:', error);
    }
  }

  return (
    <main>
      <div>
        <h1>Mis turnos</h1>
        {misTurnos.map((turno) => (
          <div key={turno.id} className={styles.cita}>
            <p>Fecha: {turno.date}</p>
            <p>Hora: {turno.time}</p>
            <p>Descripción: {turno.description}</p>
            <p>Estado: {turno.status}</p>
            {turno.status !== "CANCELADO" && (
              <button onClick={() => handleCancelAppointment(turno.id)} className={styles.btn}>Cancelar cita</button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // export default function MisTurnos() {
  //   const [misTurnos, setMisTurnos] = useState([]);
    
  //   useEffect(() => { 
  //     getAllAppointments()
  //     .then((res => setMisTurnos(res)))
  //     .catch((err) => console.log(err));
  //     ;
  //    },[]
    
  //   )
    
  //     return (
  //       <div>
  //         {misTurnos.length > 0 &&
  //           misTurnos.map(function(turno) {
  //             return (
  //               <main className={styles.main}>
  //                 <h1>Mis turnos</h1>
  //               <div key={turno.id}>
  //                 <p>Fecha: {turno.date}</p>
  //                 <p>Hora: {turno.time}</p>
  //                 <p>Descripcion: {turno.description}</p>
  //                 <p>Estado: {turno.status}</p>
  //               </div>
  //               </main>
  //             );
  //           })}
  //       </div>
  //     );
  //   }











