import styled from "styled-components";
import { Box } from "@mui/material";
import { styled as styledMui } from "@mui/system";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;

  /* Desktop properties */
  @media screen and (min-width: 768px) {
    .detailing {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 2%;
    }

    .image-book-detailing {
      width: 50%;
      height: 100%;
    }

    .image-book-detailing img {
      height: 100%;
      width: 100%;
    }

    .infos-detailing {
      margin-left: 6%;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .info-title-authors-detailing {
      margin-top: 2%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .authors-detailing {
        display: flex;
      }
    }

    .info-book-detailing {
      height: 40%;
      display: flex;
      flex-direction: column;

      .information-itens {
        display: flex;
        justify-content: space-between;
        margin-top: 2%;
      }
    }

    .review-book-detailing {
      margin-top: 4%;
      height: 40%;
      width: 100%;
      display: flex;
      flex-direction: column;

      .text-review {
        margin-top: 4%;
        width: 100%;
        text-align: justify;
      }
    }
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    .detailing {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 4%;
      overflow-y: auto;
    }

    .image-book-detailing {
      background-color: blue;
      width: 100%;
      height: 100%;
    }

    .image-book-detailing img {
      height: 100%;
      width: 100%;
    }

    .infos-detailing {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .info-title-authors-detailing {
      margin-top: 10%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .authors-detailing {
        display: flex;
      }
    }

    .info-book-detailing {
      margin-top: 10%;
      height: 40%;
      display: flex;
      flex-direction: column;

      .information-itens {
        display: flex;
        justify-content: space-between;
        margin-top: 2%;
      }
    }

    .review-book-detailing {
      margin-top: 10%;
      height: 40%;
      width: 100%;
      display: flex;
      flex-direction: column;

      .text-review {
        margin-top: 4%;
        width: 100%;
        text-align: justify;
      }
    }
  }
`;

const CustomBox = styledMui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
  [`@media (min-width: 768px)`]: {
    width: "60vw",
    height: "80vh",
  },
  [`@media (max-width: 767px)`]: {
    width: "90vw",
    height: "90vh",
  },
});

export { Container, CustomBox };
