import React from "react";
import Container from "./styles.js";
import logo from "../../assets/logos/black_noz.svg";

function NotFound() {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>Página não encontrada</h1>
      </div>
    </Container>
  );
}

export default NotFound;
