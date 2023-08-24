import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="footer">
      Created by M Abhay Kamath with ReactJs
      <i className="fa-brands fa-react" style={{ color: "#16d4be" }}></i>-
      source code
      <a
        rel="noreferrer"
        href="https://github.com/abhaykamath/jokes-app-react"
        target="_blank"
      >
        GitHub <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
}

export default Footer;
