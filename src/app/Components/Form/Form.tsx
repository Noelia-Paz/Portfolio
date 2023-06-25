import emailjs from "@emailjs/browser";
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

export default Form;
