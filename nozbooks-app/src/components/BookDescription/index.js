import React from "react";
import { Typography } from "@mui/material";
import Container from "./styles.js";

function BookDescription({ book }) {
  const labels = [
    "Páginas",
    "Editora",
    "Publicação",
    "Idioma",
    "Título Original",
    "ISBN-10",
    "ISBN-13",
  ];

  function DisplayData() {
    const { pageCount, publisher, published, language, title, isbn10, isbn13 } =
      book;
    const infoList = [
      `${pageCount} páginas`,
      `Editora ${publisher}`,
      published,
      language,
      title,
      isbn10,
      isbn13,
    ];

    return labels.map((item, index) => (
      <div class="information-itens" key={index}>
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipses"
          sx={{ fontSize: 10, fontWeight: "bold" }}
          color="text.secondary"
        >
          {item}
        </Typography>
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipses"
          sx={{ fontSize: 10 }}
          color="text.secondary"
        >
          {infoList[index]}
        </Typography>
      </div>
    ));
  }
  return (
    <Container>
      <div className="detailing">
        <div className="image-book-detailing">
          <img src={book.imageUrl} alt="book" />
        </div>
        <div className="infos-detailing">
          <div className="info-title-authors-detailing">
            <div clasName="title-detailing">
              <Typography
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipses"
                color="text.primary"
                variant="h4"
              >
                {book.title}
              </Typography>
            </div>
            <div className="authors-detailing">
              {book.authors.length > 1 ? (
                book.authors.map((author, index) => {
                  return (
                    <Typography
                      key={index}
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipses"
                      sx={{ fontSize: 12 }}
                      style={{ color: "#2E63F7" }}
                    >
                      {book.authors.length - 1 > index
                        ? ` ${author},`
                        : ` ${author}`}
                    </Typography>
                  );
                })
              ) : (
                <Typography
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipses"
                  sx={{ fontSize: 12 }}
                  style={{ color: "#2E63F7" }}
                >
                  {book.authors[0]}
                </Typography>
              )}
            </div>
          </div>

          <div className="info-book-detailing">
            <div>
              <Typography
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipses"
                sx={{ fontSize: 12, fontWeight: "bold", marginBottom: "2%" }}
                color="text.primary"
              >
                INFORMAÇÕES
              </Typography>
            </div>

            {DisplayData()}
          </div>
          <div className="review-book-detailing">
            <div>
              <Typography
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipses"
                sx={{ fontSize: 12, fontWeight: "bold" }}
                color="text.primary"
              >
                RESENHA DA EDITORA
              </Typography>
            </div>
            <div className="text-review">
              <Typography
                textOverflow="ellipses"
                overflow="hidden"
                sx={{ fontSize: 11 }}
                color="text.primary"
              >
                {book.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BookDescription;
