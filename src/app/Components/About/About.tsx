"use client";

import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Profile from "../../../../public/profile.png";
const About = () => {
  return (
    <div className={styles.about}>
      <figure>
        <Image src={Profile} alt="img" className={styles.img} />
      </figure>
      <article>
        <h2 className={styles.desktop}>
          Hola soy Noelia, me encantaria
          <br />
          trabajar en tu proximo proyecto.
        </h2>
        <h2 className={styles.tablet}>
          Hola soy Noelia, me encantaria
          <br />
          trabajar en tu proximo proyecto.
        </h2>
        <h2 className={styles.mobile}>
          Hola soy Noelia, me encantaria
          <br />
          trabajar en tu proximo proyecto.
        </h2>
        <p className={styles.desktop}>
          Estoy ansiosa por adquirir más experiencia profesional y aprender
          nuevas habilidades en el proceso.
          <br />
          <br />
          Si buscas a alguien apasionada por el desarrollo web, y que esté
          dispuesta a enfrentar desafíos y aportar ideas creativas, estaré
          encantada de ser parte de tu equipo.
          <br />
          <br />
          ¡No dudes en contactarme si te gusto mi perfil!
          <br />
          Estoy emocionada por la oportunidad de trabajar juntos y contribuir al
          éxito de tu empresa.
        </p>
        <p className={styles.tablet}>
          Estoy ansiosa por adquirir más experiencia profesional y aprender
          nuevas habilidades en el proceso.
          <br />
          <br />
          Si buscas a alguien apasionada por el desarrollo web, y que esté
          dispuesta a enfrentar desafíos y aportar ideas creativas, estaré
          encantada de ser parte de tu equipo.
          <br />
          <br />
          ¡No dudes en contactarme si te gusto mi perfil!
          <br />
          Estoy emocionada por la oportunidad de trabajar juntos y contribuir al
          éxito de tu empresa.
        </p>
        <p className={styles.mobile}>
          Estoy ansiosa por adquirir más experiencia profesional y aprender
          nuevas habilidades en el proceso.
          <br />
          <br />
          Si buscas a alguien apasionada por el desarrollo web, y que esté
          dispuesta a enfrentar desafíos y aportar ideas creativas, estaré
          encantada de ser parte de tu equipo.
          <br />
          <br />
          ¡No dudes en contactarme si te gusto mi perfil!
          <br />
          Estoy emocionada por la oportunidad de trabajar juntos y contribuir al
          éxito de tu empresa.
        </p>
        <button type="button">Enviar Mensaje</button>
      </article>
    </div>
  );
};

export default About;
