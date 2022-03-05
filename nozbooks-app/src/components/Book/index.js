import React from "react";
import { Typography } from "@mui/material";
import Container from "./styles.js";

function Book({ book }) {
  return (
    <Container>
      <div className="image-book">
        <img src={book.imageUrl} alt="book" />
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
              {book.title}
            </Typography>
          </div>
          <div>
            {book.authors.length > 1 ? (
              book.authors.map((author, index) => {
                return (
                  <Typography
                    key={index}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipses"
                    sx={{ fontSize: 8 }}
                    color="primary.main"
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
                color="text.secondary"
              >
                {book.authors[0]}
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
              {`${book.pageCount} páginas`}
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
              {book.publisher}
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
              {book.published}
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Book;
