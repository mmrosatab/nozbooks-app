import React from "react";
import { Typography } from "@mui/material";
import { Container, CustomBox } from "./styles";
import imagePlaceholder from "../../assets/images/image_placeholder.png";
import { Modal } from "@mui/material";

function BookDescriptionModal({ book, openModal, handleClose }) {
  const {
    title,
    authors,
    description,
    pageCount,
    publisher,
    published,
    language,
    isbn10,
    isbn13,
  } = book;

  const image = book.imageUrl == null ? imagePlaceholder : book.imageUrl;

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
    <Modal open={openModal} onClose={handleClose}>
      <CustomBox>
        <Container>
          <div className="detailing">
            <div className="image-book-detailing">
              <img src={image} alt="book" />
            </div>
            <div className="infos-detailing">
              <div className="info-title-authors-detailing">
                <div className="title-detailing">
                  <Typography
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipses"
                    color="text.primary"
                    variant="h4"
                  >
                    {title}
                  </Typography>
                </div>
                <div className="authors-detailing">
                  {authors.length > 1 ? (
                    authors.map((author, index) => {
                      return (
                        <Typography
                          key={index}
                          overflow="hidden"
                          whiteSpace="nowrap"
                          textOverflow="ellipses"
                          sx={{ fontSize: 12 }}
                          style={{ color: "#2E63F7" }}
                        >
                          {authors.length - 1 > index
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
                      {authors[0]}
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
                    sx={{
                      fontSize: 12,
                      fontWeight: "bold",
                      marginBottom: "2%",
                    }}
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
                    {description}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </CustomBox>
    </Modal>
  );
}

export default BookDescriptionModal;
