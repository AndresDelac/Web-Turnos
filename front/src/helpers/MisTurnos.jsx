import { useState } from 'react';
import turns from './myTurns';
import turno from "../components/turno/turno"

function MisTurnos() {
  const [misTurnos, setMisTurnos] = useState(turns);

  // Resto del código del componente

  return (
    <div>
        <h1>Mis turnos</h1>
        <ul>
            {misTurnos.map(turno => {
                <li>
                    key = {turno.id}
                    <p>Fecha: {turno.date}</p>
                    <p>Hora: {turno.time}</p>
                    <p>Descripcion: {turno.description}</p>
                    <p>Estado: {turno.status}</p>
                    <p>ID Usuario: {turno.userId}</p>
                    <p>ID Servicio: {turno.serviceId}</p>
                </li>
            })}
        </ul>
    </div>
  );
}

export default MisTurnos;
