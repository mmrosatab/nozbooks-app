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
  Typography,
  Modal,
  CardActionArea,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/logos/black_noz.svg";
import iconLogout from "../../assets/images/logout_circle.png";
import iconClose from "../../assets/images/close_circle.png";
import iconBefore from "../../assets/images/before_circle.png";
import iconAfter from "../../assets/images/after_circle.png";

const PAGE_SIZE = 12;

function Home() {
  const auth = useAuth();
  const username = getUsernameLocalStorage();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [currentTable, setCurrentTable] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const sxGrid = useMediaQuery("(min-width:768px)") ? 3 : 12;

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    const table = books.slice(firstPageIndex, lastPageIndex);
    setCurrentTable(table);
  }, [currentPage]);

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  async function getBooks() {
    const response = await booksRequest();
    if (response !== null) {
      const { data } = response;
      const { totalItems } = data;
      const _totalPages = Math.ceil(totalItems / PAGE_SIZE);
      const table = data.data.slice(0, PAGE_SIZE);
      setCurrentTable(table);
      setTotalPages(_totalPages);
      setBooks(data.data);
    }
  }

  function handlePreviousPage() {
    let page = currentPage;
    if (page > 1) {
      page = page - 1;
      setCurrentPage(page);
    }
  }

  function handleNextPage() {
    let page = currentPage;
    if (page < totalPages) {
      page = page + 1;
      setCurrentPage(page);
    }
  }

  function handleOpenModal() {
    // console.log(id);
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

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
          <Box sx={{ height: "68vh" }}>
            <Grid container spacing={2}>
              {currentTable.map((book, index) => {
                return (
                  <Grid key={index} item xs={sxGrid}>
                    <Card key={book.id}>
                      <CardActionArea
                        component="a"
                        onClick={() => console.log("estou clicando")}
                      >
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 10 }}
                            color="text.secondary"
                          >
                            {book.title}
                          </Typography>

                          {book.authors.length > 1 ? (
                            book.authors.map((author, index) => {
                              return (
                                <Typography
                                  key={index}
                                  sx={{ fontSize: 8 }}
                                  color="text.secondary"
                                >
                                  {author}
                                </Typography>
                              );
                            })
                          ) : (
                            <Typography
                              sx={{ fontSize: 8 }}
                              color="text.secondary"
                            >
                              {book.authors[0]}
                            </Typography>
                          )}

                          <Typography
                            sx={{ fontSize: 10 }}
                            color="text.secondary"
                          >
                            {`${book.pageCount} páginas`}
                          </Typography>
                          <Typography
                            sx={{ fontSize: 10 }}
                            color="text.secondary"
                          >
                            {book.publisher}
                          </Typography>
                          <Typography
                            sx={{ fontSize: 10 }}
                            color="text.secondary"
                          >
                            {book.published}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      {/* <CardActions>
                        <Modal
                          open={openModal}
                          onClose={handleCloseModal}
                        ></Modal>
                      </CardActions> */}
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Main>
        <Footer>
          <div id="itens-footer">
            <div>
              Página {currentPage} de {totalPages}
            </div>
            <div>
              <Button type="submit" onClick={handlePreviousPage}>
                <img src={iconBefore} alt="before" />
              </Button>
            </div>
            <div>
              <Button type="submit" onClick={handleNextPage}>
                <img src={iconAfter} alt="after" />
              </Button>
            </div>
          </div>
        </Footer>
      </HomeContainer>
    </Container>
  );
}

export default Home;
