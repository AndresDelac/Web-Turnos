import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
            <div style={{display: "flex", gap: "25px", backgroundColor: "grey", fontSize: "25px", padding: "10px"}}>
                <img href="../../../assets/logo.svg" alt="foto" />
                <h2>PilarGames</h2>
                
                <Link to={"/Schedule"}>
                <button style ={{color:"#fff", marginLeft: "25px", padding: "5px", backgroundColor:"#FE4A47"}}>
                    Agendar
                </button >
                </Link>

                <Link to={"/Citas"}>
                <button style ={{color:"#fff", marginLeft: "25px", padding: "5px", backgroundColor:"#FE4A47"}}>
                    Mis Citas
                </button>
                </Link>
                
                <Link to={"/LogIn"}>
                <button style ={{color:"#fff", marginLeft: "25px", padding: "5px", backgroundColor:"#FE4A47"}}>
                    Inicia sesion
                </button>
                </Link>

                <Link to={"/Registrarse"}>
                <button style ={{color:"#fff", marginLeft: "25px", padding: "5px", backgroundColor:"#FE4A47"}}>
                    Registrate
                </button>
                </Link>

            </div>
        )
}