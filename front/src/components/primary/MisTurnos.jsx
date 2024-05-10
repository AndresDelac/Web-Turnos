import { useEffect, useState } from 'react';
import { turns } from '../../db/myTurns';
import { getAllAppointments} from '../../helpers';

export default function MisTurnos() {
  const [misTurnos, setMisTurnos] = useState([]);

  // function getMisTurnos() {

  // }

useEffect(() => { 
  getAllAppointments()
  .then((res => setMisTurnos(res)))
  .catch((err) => console.log(err));
  ;
 },[]

)

  return (
    <div>
      <h1>Mis turnos</h1>
      {misTurnos.length > 0 &&
        misTurnos.map(function(turno) {
          return (
            <div key={turno.id}>
              <p>Fecha: {turno.date}</p>
              <p>Hora: {turno.time}</p>
              <p>Descripcion: {turno.description}</p>
              <p>Estado: {turno.status}</p>
              <p>ID Usuario: {turno.userId}</p>
              <p>ID Servicio: {turno.serviceId}</p>
            </div>
          );
        })}
    </div>
  );
}

function Turno (turno){
  return <div key={turno.id} > {turno.id}</div>
}

