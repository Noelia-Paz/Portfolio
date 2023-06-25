"use client";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header/Header";
import styles from "../app/styles/Home.module.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Hero />
        <About />
        <Work />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
