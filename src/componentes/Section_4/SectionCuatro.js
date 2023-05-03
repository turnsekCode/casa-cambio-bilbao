import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Bilbao</span>
        </h2>
        <p>
          Tanto si vives en Bilbao como si estás de vacaciones en esta
          fantástica ciudad del norte, tienes la suerte de tener una casa de
          cambio Quickgold para que cambiar divisa sea un proceso sencillo y
          rápido. Recuerda que en nuestra casa de cambio en Bilbao realizamos
          mejoras en el tipo de cambio por cantidad. Indícanos tus necesidades
          y, sin compromiso, te asesoraremos y te ofreceremos el mejor tipo de
          cambio de la ciudad. Cambia moneda extranjera en Bilbao de manera
          fácil y rápida.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-bilbao.webp"
          alt="Cambiar Dólares a Euros bilbao"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
