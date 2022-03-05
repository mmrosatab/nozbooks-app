import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { booksRequest } from "../../service/request";
import { Container, HomeContainer, Header, Main, Footer } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { getUsernameLocalStorage } from "../../context/LocalStoreProvider";
import {
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import logo from "../../assets/logos/black_noz.svg";
import iconLogout from "../../assets/images/circle_logout.svg";

function Home() {
  const auth = useAuth();
  const username = getUsernameLocalStorage();
  const navigate = useNavigate();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  async function getBooks() {
    const response = await booksRequest();
    const data = response.data;
    setBooks(data);
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
        <Main>
          <Box sx={{ flexGrow: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>xs=8</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=8</Card>
              </Grid>

              <Grid item xs={12}>
                <Card>xs=8</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=8</Card>
              </Grid>

              <Grid item xs={12}>
                <Card>xs=8</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=4</Card>
              </Grid>
              <Grid item xs={12}>
                <Card>xs=8</Card>
              </Grid>
            </Grid>
          </Box>
        </Main>
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
