import React from "react";
import Container from "./styles.js";
import { blackLogo } from "../../constants/images.js";

function NotFound() {
  return (
    <Container>
      <div>
        <img src={blackLogo} alt="logo" />
      </div>
      <div>
        <h1>Página não encontrada</h1>
      </div>
    </Container>
  );
}

export default NotFound;
