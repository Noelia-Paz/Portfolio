"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <button type="button">
        <Image src={Logo} alt="Logo" />
      </button>
      <button type="button" onClick={() => router.push("/#contactMe")}>
        Enviar Mensaje
      </button>
    </nav>
  );
};

export default Header;
