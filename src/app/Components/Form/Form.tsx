/*import emailjs from "@emailjs/browser";
import React from "react";
import swal from "sweetalert";
import styles from "./Form.module.css";

function Form() {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8awba0h",
      "template_1dovcxn",
      e.target,
      "QvBuxbHtSWiZHY-0s"
    );

    swal({
      text: "Se envio con exito!",
      icon: "success",
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail} className={styles.form} id="contactMe">
      <div className={styles.contact}>
        <div className={styles.contactoForm}>
          <div>
            <h1 className={styles.h1} id="contacto">
              Gracias por ponerte en contacto!
            </h1>
          </div>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="text" name="last" placeholder="Apellido" required />
          <input
            type="email"
            name="email"
            placeholder="Dejame tu Correo electronico"
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Mensaje"
            className="message"
            required
          />
          <div>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;*/

import emailjs from "@emailjs/browser";
import React from "react";
import swal from "sweetalert";
import styles from "./Form.module.css";
import { motion } from "framer-motion";

function Form() {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8awba0h",
      "template_1dovcxn",
      e.target,
      "QvBuxbHtSWiZHY-0s"
    );

    swal({
      text: "Se envio con exito!",
      icon: "success",
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className={styles.divForm} id="contactMe">
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.formulario}
        onSubmit={sendEmail}
      >
        <h2 className={styles.h22}>Gracias por ponerte en contacto!</h2>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            name="last"
            placeholder="Apellido"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <input
            type="email"
            name="email"
            placeholder="Dejame tu email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <textarea
            placeholder="Mensaje"
            name="message"
            className={styles.inputTextarea}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </motion.form>
    </div>
  );
}

export default Form;
