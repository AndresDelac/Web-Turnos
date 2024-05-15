import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css"
export default function NavBar() {
    return (
        <header>
            <div className={styles.cabezera}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M.012 11.994L12.006 0l11.982 12.006h-6.831l-5.163-5.151l-5.151 5.151l5.163 5.151v-5.151h5.151v6.903L12.006 24z"/></svg>
                <h2 className={styles.title}>PilarGames</h2>
                <Link to={"/"}>
                <button className ={styles.btns}>
                    Home
                </button>
                </Link>
                
                <Link to={"/Schedule"}>
                <button className ={styles.btns}>
                    Agendar
                </button >
                </Link>

                <Link to={"/Citas"}>
                <button className ={styles.btns}>
                    Mis Citas
                </button>
                </Link>
                
                <Link to={"/LogIn"}>
                <button className ={styles.btns}>
                    Inicia sesion
                </button>
                </Link>

                <Link to={"/Registrarse"}>
                <button className ={styles.btns}>
                    Registrate
                </button>
                </Link>


            </div>
            </header>
        )
}