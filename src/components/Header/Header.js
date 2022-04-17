import React from "react";
import HeaderCSS from "./Header.module.css";
import earth from "../../images/earth.svg";

export default function Header() {
  return (
    <header className={HeaderCSS.header}>
      <img className={HeaderCSS.header__logo} src={earth} alt="logo" />
      <h1 className={HeaderCSS.header__title}>my travel journal.</h1>
    </header>
  );
}
