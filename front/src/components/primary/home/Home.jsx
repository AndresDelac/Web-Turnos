import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./home.css"
import { useNavigate } from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate()

    const userId = useSelector((state)=> state.userId)
    
    console.log(userId);
    // useEffect(()=> {
    // }, [userId]);

    return(
        <main>
        <div>
            <h1 className="title-1">Bienvenido!</h1>
            {localStorage.getItem("userId") ? (           
            navigate("/Schedule")
    
            ) : (
                
              <p>Debes estar Logeado para agendar tu cita</p>

            )}
            <p>Hola aqui encontraras todos tus juegos al mejor precio del mercado. Contamos con un sistema de Citas para que pruebes tu videojuego antes de llevartelo.</p>
        </div>
        </main>
    );
}