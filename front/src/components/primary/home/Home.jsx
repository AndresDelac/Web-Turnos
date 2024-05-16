import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./home.module.css"
import { useNavigate } from 'react-router-dom';
import Schedule from "../schedule/Schedule"

export default function Home(){

    const navigate = useNavigate()

    const userId = useSelector((state)=> state.userId)
    
    console.log(userId);

    return(
        <main>
        <div className={styles.contenedor}>
            <h1 className={styles.title1}>Bienvenido!</h1>
            {localStorage.getItem("userId") ? (           
            // navigate("/Schedule")
            <Schedule />
            ) : (
                
              <p className={styles.logInAlert}>Debes estar Logeado para agendar tu cita !</p>

            )}
        </div>



        </main>
    );
}