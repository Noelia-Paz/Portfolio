"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div>
        <article>
          <h2>Reserva una entrevista conmigo</h2>
          <p className={styles.desktop}>
            Me encantaria tener una charla para ver como puedo colaborar,
            <br />
            enviame un mensaje y hablemos,
            <br />
            asi podemos avanzar.
          </p>
          <p className={styles.tablet}>
            Me encantaria tener una charla para ver como puedo colaborar,
            <br />
            enviame un mensaje y hablemos,
            <br />
            asi podemos avanzar.
          </p>
          <p className={styles.mobile}>
            Me encantaria tener una charla
            <br />
            para ver como puedo colaborar,
            <br />
            enviame un mensaje y hablemos,
            <br />
            asi podemos avanzar.
          </p>
        </article>
        <button type="button" onClick={() => router.push("/#contactMe")}>
          Enviar Mensaje
        </button>
      </div>
    </footer>
  );
};

export default Footer;
