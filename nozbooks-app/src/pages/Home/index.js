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

  return (
    <Container>
      <HomeContainer>
        <Header>
          <div id="title-home-div">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>Books</div>
          </div>
          <div>
            <div>{`Olá, ${username}`}</div>
            <div>
              <Button type="submit" onClick={handleClickLogout}>
                <img src={iconLogout} alt="logo" />
              </Button>
            </div>
          </div>
        </Header>
        <Main />
        <Footer />
      </HomeContainer>
    </Container>
  );
}

export default Home;
