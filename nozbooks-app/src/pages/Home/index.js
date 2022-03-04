import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, HomeContainer, Header, Main, Footer } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { getUsernameLocalStorage } from "../../context/LocalStoreProvider";
import Button from "@mui/material/Button";
import logo from "../../assets/logos/black_noz.svg";
import iconLogout from "../../assets/images/circle_logout.svg";

function Home() {
  const auth = useAuth();
  const username = getUsernameLocalStorage();
  const navigate = useNavigate();

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  function handlePreviousPage() {}

  function handleNextPage() {}

  return (
    <Container>
      <HomeContainer>
        <Header>
          <div id="title-header-logo">
            <div id="img-logo-noz">
              <img src={logo} alt="logo" />
            </div>
            <div id="books-title">Books</div>
          </div>
          <div id="title-header-user">
            <div id="title-welcome">
              Bem vinda, <span>{username}</span>
            </div>
            <div>
              <Button type="submit" onClick={handleClickLogout}>
                <img src={iconLogout} alt="logo" />
              </Button>
            </div>
          </div>
        </Header>
        <Main />
        <Footer>
          <div id="itens-footer">
            <div>Página 1 de 100</div>
            <div>
              <Button type="submit" onClick={handlePreviousPage}>
                <img alt="before" />
              </Button>
            </div>
            <div>
              <Button type="submit" onClick={handleNextPage}>
                <img alt="after" />
              </Button>
            </div>
          </div>
        </Footer>
      </HomeContainer>
    </Container>
  );
}

export default Home;
