import React from 'react';

function Turno({ fecha, hora, descripcion }) {
  return (
    <div>
      <h2>Detalles del Turno</h2>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
      <p>Descripción: {descripcion}</p>
    </div>
  );
}

export default Turno;
