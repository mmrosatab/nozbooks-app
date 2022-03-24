import React from "react";
import { Typography } from "@mui/material";
import Container from "./styles.js";
import imagePlaceholder from "../../assets/images/image_placeholder.png";

function Book({ book }) {
  const image = book.imageUrl == null ? imagePlaceholder : book.imageUrl;
  const { title, authors, pageCount, publisher, published } = book;

  return (
    <Container>
      <div className="image-book">
        <img src={image} alt="book" />
      </div>
      <div className="infos">
        <div className="info-title-authors">
          <div>
            <Typography
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipses"
              sx={{ fontSize: 10 }}
              color="text.primary"
            >
              {title}
            </Typography>
          </div>
          <div>
            {authors.length > 1 ? (
              authors.map((author, index) => {
                return (
                  <Typography
                    key={index}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipses"
                    sx={{ fontSize: 8 }}
                    style={{ color: "#2E63F7" }}
                  >
                    {author}
                  </Typography>
                );
              })
            ) : (
              <Typography
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipses"
                sx={{ fontSize: 8 }}
                style={{ color: "#2E63F7" }}
              >
                {authors[0]}
              </Typography>
            )}
          </div>
        </div>

        <div className="info-book">
          <div>
            <Typography
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipses"
              sx={{ fontSize: 10 }}
              color="text.secondary"
            >
              {`${pageCount} páginas`}
            </Typography>
          </div>
          <div>
            <Typography
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipses"
              sx={{ fontSize: 10 }}
              color="text.secondary"
            >
              {publisher}
            </Typography>
          </div>
          <div>
            <Typography
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipses"
              sx={{ fontSize: 10 }}
              color="text.secondary"
            >
              {published}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Book;
