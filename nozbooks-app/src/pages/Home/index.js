import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { booksRequest, booksByIdRequest } from "../../service/request";
import { Container, HomeContainer, Header, Main, Footer } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { getUsernameLocalStorage } from "../../context/LocalStoreProvider";
import BookCard from "../../components/BookCard";
import BookDescriptionModal from "../../components/BookDescriptionModal";
import { Grid } from "@mui/material";
import {
  blackLogo,
  logoutIcon,
  beforeIcon,
  afterIcon,
} from "../../constants/images";

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
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    const table = books.slice(firstPageIndex, lastPageIndex);
    setCurrentTable(table);
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

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

  async function handleClickModal(id) {
    const response = await booksByIdRequest(id);

    if (response !== null) {
      const { data } = response;
      setCurrentBook(data);
      handleOpen(true);
    }
  }

  function handleOpen() {
    setOpenModal(true);
  }

  function handleClose() {
    setCurrentBook(null);
    setOpenModal(false);
  }

  function DisplayData() {
    if (currentBook !== null) {
      return (
        <BookDescriptionModal
          book={currentBook}
          openModal={openModal}
          handleClose={handleClose}
        />
      );
    }
    return <></>;
  }

  return (
    <Container>
      <HomeContainer>
        <Header>
          <div id="title-header-logo">
            <div id="img-logo-noz">
              <img src={blackLogo} alt="logo" />
            </div>
            <div id="books-title">
              <span>Books</span>
            </div>
          </div>
          <div id="title-header-user">
            <div id="title-welcome">
              Bem vinda, <span>{username}</span>
            </div>
            <div id="title-logout-btn">
              <button onClick={handleClickLogout}>
                <img src={logoutIcon} alt="logo" />
              </button>
            </div>
          </div>
        </Header>
        <Main>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            {currentTable.map((book, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={{ height: "33%" }}
                >
                  <BookCard
                    book={book}
                    handleClickModal={() => handleClickModal(book.id)}
                  />
                </Grid>
              );
            })}
          </Grid>

          {DisplayData()}
        </Main>
        <Footer>
          <div id="itens-footer">
            <div>
              Página <span>{currentPage}</span> de <span>{totalPages}</span>
            </div>
            <div className="itens-footer-btn">
              <button onClick={handlePreviousPage}>
                <img src={beforeIcon} alt="before" />
              </button>
            </div>
            <div className="itens-footer-btn">
              <button onClick={handleNextPage}>
                <img src={afterIcon} alt="after" />
              </button>
            </div>
          </div>
        </Footer>
      </HomeContainer>
    </Container>
  );
}

export default Home;
