import React from "react";
import styles from "./about.module.css"

export default function About(){
    return (
        <main>
          <h1 className={styles.title1}>About Us</h1>
          <div className={styles.contenedor2}>
            <p>Hola a todos. Sabemos lo caros que pueden ser los juegos en su versión de lanzamiento. Por eso, aquí en Pilar Games encontrarás todos tus juegos al mejor precio del mercado. Contamos con un sistema de citas para que pruebes tu videojuego antes de llevártelo. Estos juegos ya han sido usados, ¡pero no por eso significa que sean malos! Cuando agendes la cita con el vendedor y acuerden el precio, será todo tuyo. Ahora te dejo para que explores un poco nuestra página. Y una vez más, bienvenido a Pilar Games.</p>
          </div>
          
          <section>
            <h1 className={styles.title1}>Seccion de Noticias</h1>
            <h2 className={styles.tituloJuego}>
              TOP 5 JUEGOS DE SUPERVIVENCIA Y MUNDO ABIERTO #6
            </h2>
            <div className={styles.HomecontenedorJuego}>
              <p>En el Top 5 de esta semana, traemos un listado de juegos de supervivencia y mundo abierto, juegos que han ganado gran popularidad en los últimos años, atrayendo a jugadores de todas partes con su desafiante jugabilidad y vastos entornos por explorar.</p>
            </div>
            <a className={styles.link} href="https://pivigames.blog/top-5-juegos-de-supervivencia-y-mundo-abierto-6/">Sigue leyendo</a>
      
            <h2 className={styles.tituloJuego}>
              ESTÁN REGALANDO CIRCUS ELECTRIQUE Y CONTENIDO EXTRA PARA FIRESTONE
            </h2>
            <div className={styles.HomecontenedorJuego}>
              <p>Esta semana en la Epic Games Store están regalando Circus Electrique y contenido extra para el juego FIRESTONE de PC. Como ya es costumbre, tienes 7 días para reclamar estos regalos, activarlos en tu biblioteca y conservarlos para siempre. Circus Electrique es un RPG centrado en la historia donde el que fuera el espectáculo londinense más famoso de un pasado distópico se combina con apasionantes combates tácticos y gestión, así como una ambientación con un toque retrofuturista steampunk.</p>
            </div>
            <a className={styles.link} href="https://pivigames.blog/estan-regalando-circus-electrique-y-contenido-extra-para-firestone/">Sigue leyendo</a>
      
            <h2 className={styles.tituloJuego}>
              GHOST OF TSUSHIMA [Oferta -23%]
            </h2>
            <div className={styles.HomecontenedorJuego}>
              <p>Ghost of Tsushima para PC es un galardonado juego de acción y aventura de mundo abierto, con una perspectiva de jugador en tercera persona. Está ambientado en el antiguo Japón feudal, pero los problemas a los que se enfrenta el protagonista serán fácilmente comprensibles para los jugadores occidentales y modernos.</p>
            </div>
            <a className={styles.link} href="https://www.instant-gaming.com/es/9093-comprar-ghost-of-tsushima-director-s-cut-pc-juego-steam/?igr=Pivi">Sigue leyendo</a>
          </section> 
          </main>
      );
      
}