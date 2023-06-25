"use client";

import React from "react";

import Header from "./Components/Header/Header";
import styles from "../app/styles/Home.module.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <About />
      <Work />
      <Form />
      <Footer />
    </div>
  );
}
