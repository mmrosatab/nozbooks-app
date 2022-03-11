import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { booksRequest, booksByIdRequest } from "../../service/request";
import {
  Container,
  HomeContainer,
  Header,
  Main,
  Footer,
  CustomBox,
} from "./styles";
import { useAuth } from "../../context/AuthContext";
import { getUsernameLocalStorage } from "../../context/LocalStoreProvider";
import Book from "../../components/Book";
import BookDescription from "../../components/BookDescription";
import {
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Modal,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/logos/black_noz.svg";
import iconLogout from "../../assets/images/logout_circle.png";
import iconBefore from "../../assets/images/before_circle.png";
import iconAfter from "../../assets/images/after_circle.png";
import iconHand from "../../assets/images/hand.png";
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
      return <BookDescription book={currentBook} />;
    }
    return <></>;
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
              <Button
                style={{ backgroundColor: "transparent" }}
                type="submit"
                onClick={handleClickLogout}
              >
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
                        style={styleCardContent}
                        component="a"
                        onClick={() => handleClickModal(book.id)}
                      >
                        <CardContent>
                          <Book book={book} />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Modal open={openModal} onClose={handleClose}>
            <CustomBox>{DisplayData()}</CustomBox>
          </Modal>
        </Main>
        <Footer>
          <div id="itens-footer">
            <div>
              Página <span>{currentPage}</span> de <span>{totalPages}</span>
            </div>
            <div>
              <Button
                style={{ backgroundColor: "transparent" }}
                type="submit"
                onClick={handlePreviousPage}
              >
                <img src={iconBefore} alt="before" />
              </Button>
            </div>
            <div>
              <Button
                style={{ backgroundColor: "transparent" }}
                type="submit"
                onClick={handleNextPage}
              >
                <img src={iconAfter} alt="after" />
              </Button>
            </div>
          </div>
        </Footer>
      </HomeContainer>
    </Container>
  );
}

const styleCardContent = {
  cursor: `url(${iconHand}), auto`,
};

export default Home;
