import React from "react";
import Container from "./styles";
import imagePlaceholder from "../../assets/images/image_placeholder.png";
import { Card, CardContent, CardActionArea } from "@mui/material";
import { handIcon } from "../../constants/images";

function BookCard({ book, handleClickModal }) {
  const image = book.imageUrl == null ? imagePlaceholder : book.imageUrl;
  const { title, authors, pageCount, publisher, published } = book;

  return (
    <Card key={book.id}>
      <CardActionArea
        style={styleCardContent}
        onClick={() => handleClickModal(book.id)}
      >
        <CardContent>
          <Container>
            <div className="image-book">
              <img src={image} alt="book" />
            </div>
            <div className="infos">
              <div className="info-title-authors">
                <div>
                  <p className="p-title">{title}</p>
                </div>
                <div>
                  {authors.length > 1 ? (
                    authors.map((author, index) => {
                      return (
                        <p className="p-authors" key={index}>
                          {author}
                        </p>
                      );
                    })
                  ) : (
                    <p className="p-author">{authors[0]}</p>
                  )}
                </div>
              </div>

              <div className="info-book">
                <div>
                  <p className="p-page-count">{`${pageCount} páginas`}</p>
                </div>
                <div>
                  <p className="p-publisher">{publisher}</p>
                </div>
                <div>
                  <p className="p-published">{`Publicado em ${published} `}</p>
                </div>
              </div>
            </div>
          </Container>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;

const styleCardContent = {
  cursor: `url(${handIcon}), auto`,
};
