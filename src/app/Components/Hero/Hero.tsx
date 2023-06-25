"use client";

import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import ImgReact from "../../../../public/react.png";
import ImgCss from "../../../../public/css.png";
import ImgHtml from "../../../../public/html.svg";
import ImgJs from "../../../../public/js.png";
import ImgNode from "../../../../public/node.png";
import ImgExpress from "../../../../public/express.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <h2>Full Stack Web Developer</h2>
      <p className={styles.desktop}>
        Ofrezco soluciones de desarrollo web, respaldadas por más de 800 horas
        de entrenamiento intensivo en bootcamps, que incluyen teoría y práctica.
        Además, cuento con experiencia en el desarrollo de proyectos tanto
        individuales como en equipo. Estoy aquí para ser su única parada en
        tienda para todas sus necesidades de desarrollo web.
      </p>
      <p className={styles.tablet}>
        Ofrezco soluciones de desarrollo web, respaldadas por más de 800 horas
        de entrenamiento intensivo en bootcamps, que incluyen teoría y práctica.
        Además, cuento con experiencia en el desarrollo de proyectos tanto
        individuales como en equipo.
        <br />
        Estoy aquí para ser su única parada en tienda para todas sus necesidades
        de desarrollo web.
      </p>
      <p className={styles.mobile}>
        Ofrezco soluciones de desarrollo web, respaldadas por más de 800 horas
        de entrenamiento intensivo en bootcamps,
        <br />
        que incluyen teoría y práctica. Además, cuento con experiencia en el
        desarrollo de proyectos tanto individuales como en equipo.
        <br />
        Estoy aquí para ser su única parada en tienda para todas
        <br />
        sus necesidades de desarrollo web.ß
      </p>

      <div className={styles.desktop}>
        <svg
          width={"100%"}
          height={"100%"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={364} rx={8} fill="#755CDE" />
          <foreignObject x={0} y={50} width={354} height={364}>
            <Image src={ImgReact} alt="logo" width={200} height={200} />
          </foreignObject>

          <text x={40} y={320} fill="White" fontSize={20} fontWeight={700}>
            React Js
          </text>
        </svg>
        <svg
          width={165}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.087} width={164} height={182} rx={8} fill="#F6A560" />
          <foreignObject x={-80} y={30} width={354} height={364}>
            <Image src={ImgHtml} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Html
          </text>
        </svg>
        <svg
          width={165}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.131} width={164} height={182} rx={8} fill="#F39E9E" />
          <foreignObject x={-80} y={30} width={354} height={364}>
            <Image src={ImgCss} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Css
          </text>
        </svg>
        <svg
          width={354}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={182} rx={8} fill="#61C4B7" />
          <foreignObject x={40} y={10} width={354} height={364}>
            <Image src={ImgJs} alt="logo" width={150} height={150} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Javascript
          </text>
        </svg>
        <svg
          width={355}
          height={158}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.087} width={354} height={158} rx={8} fill="#EB7565" />
          <foreignObject x={40} y={10} width={354} height={364}>
            <Image src={ImgNode} alt="logo" width={120} height={110} />
          </foreignObject>
          <text x={20} y={140} fill="white" fontSize={20} fontWeight={700}>
            Node Js
          </text>
        </svg>
        <svg
          width={354}
          height={158}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={158} rx={8} fill="#552049" />
          <foreignObject x={50} y={30} width={354} height={364}>
            <Image src={ImgExpress} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={140} fill="white" fontSize={20} fontWeight={700}>
            Express Js
          </text>
        </svg>
      </div>

      <div className={styles.tablet}>
        <svg
          width={"100%"}
          height={"100%"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={364} rx={8} fill="#755CDE" />
          <foreignObject x={0} y={50} width={354} height={364}>
            <Image src={ImgReact} alt="logo" width={200} height={200} />
          </foreignObject>

          <text x={40} y={320} fill="White" fontSize={20} fontWeight={700}>
            React Js
          </text>
        </svg>
        <svg
          width={165}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.087} width={164} height={182} rx={8} fill="#F6A560" />
          <foreignObject x={-80} y={30} width={354} height={364}>
            <Image src={ImgHtml} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Html
          </text>
        </svg>
        <svg
          width={165}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.131} width={164} height={182} rx={8} fill="#F39E9E" />
          <foreignObject x={-80} y={30} width={354} height={364}>
            <Image src={ImgCss} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Css
          </text>
        </svg>
        <svg
          width={354}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={182} rx={8} fill="#61C4B7" />
          <foreignObject x={40} y={10} width={354} height={364}>
            <Image src={ImgJs} alt="logo" width={150} height={150} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Javascript
          </text>
        </svg>
        <svg
          width={355}
          height={158}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.087} width={354} height={158} rx={8} fill="#EB7565" />
          <foreignObject x={40} y={10} width={354} height={364}>
            <Image src={ImgNode} alt="logo" width={120} height={110} />
          </foreignObject>
          <text x={20} y={140} fill="white" fontSize={20} fontWeight={700}>
            Node Js
          </text>
        </svg>
        <svg
          width={354}
          height={158}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={158} rx={8} fill="#552049" />
          <foreignObject x={50} y={30} width={354} height={364}>
            <Image src={ImgExpress} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={140} fill="white" fontSize={20} fontWeight={700}>
            Express Js
          </text>
        </svg>
      </div>
      <div className={styles.mobile}>
        <svg
          width={"100%"}
          height={"100%"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={364} rx={8} fill="#755CDE" />
          <foreignObject x={0} y={50} width={354} height={364}>
            <Image src={ImgReact} alt="logo" width={80} height={80} />
          </foreignObject>

          <text x={10} y={120} fill="White" fontSize={20} fontWeight={700}>
            React Js
          </text>
        </svg>
        <svg
          width={165}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.087} width={164} height={182} rx={8} fill="#F6A560" />
          <foreignObject x={-80} y={30} width={354} height={364}>
            <Image src={ImgHtml} alt="logo" width={80} height={80} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Html
          </text>
        </svg>
        <svg
          width={165}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.131} width={164} height={182} rx={8} fill="#F39E9E" />
          <foreignObject x={-80} y={30} width={354} height={364}>
            <Image src={ImgCss} alt="logo" width={80} height={80} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Css
          </text>
        </svg>
        <svg
          width={354}
          height={182}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={182} rx={8} fill="#61C4B7" />
          <foreignObject x={40} y={10} width={354} height={364}>
            <Image src={ImgJs} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={165} fill="white" fontSize={20} fontWeight={700}>
            Javascript
          </text>
        </svg>
        <svg
          width={355}
          height={158}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={0.087} width={354} height={158} rx={8} fill="#EB7565" />
          <foreignObject x={40} y={10} width={354} height={364}>
            <Image src={ImgNode} alt="logo" width={100} height={100} />
          </foreignObject>
          <text x={20} y={140} fill="white" fontSize={20} fontWeight={700}>
            Node Js
          </text>
        </svg>
        <svg
          width={354}
          height={158}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={354} height={158} rx={8} fill="#552049" />
          <foreignObject x={50} y={30} width={354} height={364}>
            <Image src={ImgExpress} alt="logo" width={80} height={80} />
          </foreignObject>
          <text x={20} y={140} fill="white" fontSize={20} fontWeight={700}>
            Express Js
          </text>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
