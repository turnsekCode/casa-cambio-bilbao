import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Necesitas una oficina de cambio en
            <span className={styles.linea}> Bilbao?</span>
          </h2>
          <p>
            <span>
              Nuestra casa de cambio en Bilbao se encuentra en calle Ercilla
              número 36. Te esperamos para cambiar tu divisa y llevarte euros en
              efectivo y al instante.{" "}
            </span>
            Podrás cambiar dólares por euros, libras, pesos, reales, dirhams,
            tenemos más de 30 monedas extranjeras disponibles para el cambio.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cómo cambiar divisa?</h2>
          <p>
            Cambiar divisa en Quickgold Bilbao es muy sencillo. Visita nuestra
            tienda Money Exchange, indícanos la divisa qué quieres cambiar y al
            momento podrás llevarte euros al mejor tipo de cambio de toda la
            ciudad de Bilbao.
          </p>
        </div>
      </div>
      <h1>
        Cambiar divisa en <span className={styles.linea}>Bilbao</span> es muy
        fácil
      </h1>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
