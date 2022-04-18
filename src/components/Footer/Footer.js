import React from "react";
import FooterCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <p className={FooterCSS.footer__copyright}>&copy;Amit Bar-Gil</p>
    </footer>
  );
}
