"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <button type="button">
        <Image src={Logo} alt="Logo" />
      </button>
      <button type="button">Enviar Mensaje</button>
    </nav>
  );
};

export default Header;
