"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Work.module.css";
import Consumedic from "../../../../public/consumedic.png";
import Pokemon from "../../../../public/pokemon.png";
import ONG from "../../../../public/ong.png";

const Work = () => {
  const [x, setX] = useState(0);

  const handleSlide = (direction: string) => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (direction === "left") {
        setX(x - 285.066666);
      } else {
        setX(x + 285.066666);
      }
    } else {
      if (direction === "left") {
        setX(x - 570.133333);
      } else {
        setX(x + 570.133333);
      }
    }
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (x > 570.133333) {
        setX(570.133333);
      }
      if (x < -570.133333) {
        setX(-570.133333);
      }
    } else {
      if (x > 1140.26667) {
        setX(1140.26667);
      }
      if (x < -1140.26667) {
        setX(-1140.26667);
      }
    }
  }, [x]);

  const projects = [
    {
      image: Consumedic,
      title: "Consumedic",
      subTitle1: "Full Stack Web Developer -May a Jun 2023",
      subTitle2: "Proyecto Gupal con 6 developers en Soy Henry:",
      subTitle3: "Tecnologias aplicadas para el desarrollo:",
      description:
        "Participación en un equipo de desarrollo ágil con sprints de una semana presentándole a un Product Owner avances sobre el desarrollo de la app. El objetivo de la pagina es conectar pacientes con doctores mediante un turno online, para lograr esto desarrollamos algunas de las siguientes features:",
      features: [
        "Registro de usuarios",
        "Busqueda de medicos",
        "Solicitud de turnos online",
        "Reseñas para medicos",
        "Paneles de usuriarios",
        "Integración pasarela de Pago (Mercado Pago)",
        "Envío de emails (Nodemailer)",
        "Envio de documentos(Cloudinary)",
        "Administración de usuarios, gestión de claves.",
      ],
      frameworks: [
        "React",
        "Nodejs",
        "Sequelize",
        "express",
        "PostgreSql",
        "Html",
        "Css",
        "Material UI",
        "Figma",
        "Git",
        "Github",
        "Insomnia",
        "Trello",
        "Metodologías Agiles",
        "Scrum",
      ],
      href: "https://pf-soyhenry.vercel.app",
    },
    {
      image: ONG,
      title: "SomosMas ONG",
      subTitle1: "Full Stack Web Developer -Jul a Agost 2022",
      subTitle2: "Proyecto Grupal con 5 developers en Alkemy:",
      subTitle3: "Tecnologias aplicadas para el desarrollo:",
      description:
        "Participación en un equipo de desarrollo ágil con sprints de una semana presentándole a Nuestro Mentor avances sobre el desarrollo de la app. El objetivo de la pagina es que las personas que decidan ser parte de la ONG puedan acceder a la pagina. Para esto se realiazo:",
      features: [
        "Administracion de usuarios, gestion de claves",
        "Posts de testimonios",
        "Listado de miembros",
        "Creacion de usuarios",
        "Paneles de usuriarios",
        "Envío de emails (Sendgrid)",
      ],
      frameworks: [
        "React",
        "Nodejs",
        "Sequelize",
        "express",
        "Mysql",
        "Html",
        "Css",
        "Chakra UI",
        "Git",
        "Github",
        "Postman",
        "Jira",
        "Metodologías Agiles",
        "Scrum",
      ],
      href: "https://pf-soyhenry.vercel.app",
    },
    {
      image: Pokemon,
      title: "Pokemon Api",
      subTitle1: "Full Stack Web Developer",
      subTitle2: "Proyecto individual realizado en Soy Henry:",
      subTitle3: "Tecnologias aplicadas para el desarrollo:",
      description:
        "En este proyecto construi Una Single Page Application de Pokemones donde la informacion la consume de una api externa (ApiPoke)y los nuevos pokemones se crean y guardan en una base de datos, y tiene las siguientes funcionalidades:",
      features: [
        "Creacion nuevos de Pokemones",
        "Visualizar la informacion de los pokemones",
        "Filtrarlos",
        "Ordenarlos",
        "Buscar pokemones por nombre",
      ],
      frameworks: [
        "React",
        "Redux",
        "Nodejs",
        "Sequelize",
        "express",
        "PostgreSql",
        "Html",
        "Css",
        "Git",
        "Github",
        "Insomnia",
      ],
      href: "https://pokemon-e41u.vercel.app",
    },
  ];

  return (
    <>
      <div className={styles.desktop}>
        <section className={styles.work}>
          <h2>Mis Proyectos</h2>

          <motion.div
            animate={{ x }}
            drag="x"
            dragConstraints={{ left: -855.2, right: 855.2 }}
          >
            {projects.map((project, index) => {
              return (
                <figure key={index} className={styles.card}>
                  <Image
                    src={project.image}
                    placeholder="blur"
                    alt="img"
                    width={530}
                    height={340}
                    className={styles.img}
                  />
                  <br />
                  <br />
                  <motion.a
                    href={project.href}
                    id="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                    className={styles.link}
                  >
                    Ver Proyecto
                  </motion.a>

                  <article
                    className={styles.article}
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                  >
                    <h2>{project.title}</h2>
                    <br />
                    <h3>{project.subTitle1}</h3>
                    <br />
                    <br />
                    <h5>{project.subTitle2}</h5>
                    <p>
                      {project.description}
                      {project.features.map((feature, index) => {
                        return <li key={index}>{feature}</li>;
                      })}
                    </p>
                    <br />
                    <br />
                    <h5>{project.subTitle3}</h5>
                    <p>
                      <ul className={styles.ul}>
                        {project.frameworks.map((framework, index) => {
                          return (
                            <li key={index} className={styles.li}>
                              {framework}
                            </li>
                          );
                        })}
                      </ul>
                    </p>
                  </article>
                </figure>
              );
            })}
          </motion.div>

          <div>
            <button type="button" onClick={() => handleSlide("right")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button type="button" onClick={() => handleSlide("left")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6.807 16 8-8-8-8-1.686 1.687 5.12 5.12H0v2.386h10.241l-5.12 5.12L6.807 16Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>

      <div className={styles.tablet}>
        <section className={styles.work}>
          <h2>Mis Proyectos</h2>
          <motion.div
            animate={{ x }}
            drag="x"
            dragConstraints={{ left: -855.2, right: 855.2 }}
          >
            {projects.map((project, index) => {
              return (
                <figure key={index} className={styles.card}>
                  <Image
                    src={project.image}
                    placeholder="blur"
                    alt="img"
                    width={530}
                    height={340}
                  />
                  <br />
                  <br />
                  <motion.a
                    href={project.href}
                    id="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                    className={styles.link}
                  >
                    Ver Proyecto
                  </motion.a>

                  <article
                    className={styles.article}
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                  >
                    <h2>{project.title}</h2>
                    <br />
                    <h3>{project.subTitle1}</h3>
                    <br />
                    <br />
                    <h5>{project.subTitle2}</h5>
                    <p>
                      {project.description}
                      {project.features.map((feature, index) => {
                        return <li key={index}>{feature}</li>;
                      })}
                    </p>

                    <h5>{project.subTitle3}</h5>
                    <p>
                      <ul className={styles.ul}>
                        {project.frameworks.map((framework, index) => {
                          return (
                            <li key={index} className={styles.li}>
                              {framework}
                            </li>
                          );
                        })}
                      </ul>
                    </p>
                  </article>
                </figure>
              );
            })}
          </motion.div>
          <div>
            <button type="button" onClick={() => handleSlide("right")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button type="button" onClick={() => handleSlide("left")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6.807 16 8-8-8-8-1.686 1.687 5.12 5.12H0v2.386h10.241l-5.12 5.12L6.807 16Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <div className={styles.mobile}>
        <section className={styles.work}>
          <h2>Mis Proyectos</h2>
          <motion.div
            animate={{ x }}
            drag="x"
            dragConstraints={{ left: -855.2, right: 855.2 }}
          >
            {projects.map((project, index) => {
              return (
                <figure key={index} className={styles.card}>
                  <Image
                    src={project.image}
                    placeholder="blur"
                    alt="img"
                    width={530}
                    height={340}
                    className={styles.img}
                  />
                  <br />
                  <br />
                  <motion.a
                    href={project.href}
                    id="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                    className={styles.link}
                  >
                    Ver Proyecto
                  </motion.a>

                  <article
                    className={styles.article}
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                  >
                    <h2>{project.title}</h2>
                    <br />
                    <h3>{project.subTitle1}</h3>
                    <br />
                    <br />
                    <h5>{project.subTitle2}</h5>
                    <p>
                      {project.description}
                      {project.features.map((feature, index) => {
                        return <li key={index}>{feature}</li>;
                      })}
                    </p>

                    <h5>{project.subTitle3}</h5>
                    <p>
                      <ul className={styles.ul}>
                        {project.frameworks.map((framework, index) => {
                          return (
                            <li key={index} className={styles.li}>
                              {framework}
                            </li>
                          );
                        })}
                      </ul>
                    </p>
                  </article>
                </figure>
              );
            })}
          </motion.div>
          <div>
            <button type="button" onClick={() => handleSlide("right")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button type="button" onClick={() => handleSlide("left")}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6.807 16 8-8-8-8-1.686 1.687 5.12 5.12H0v2.386h10.241l-5.12 5.12L6.807 16Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
