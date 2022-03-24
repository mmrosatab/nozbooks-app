import styled from "styled-components";
import { Box } from "@mui/material";
import { styled as styledMui } from "@mui/system";
import { handIcon, homeBackground } from "../../constants/images.js";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${homeBackground}") center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    margin-top: 2%;
    width: 90%;
    height: 84%;
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    margin-top: 4%;
    width: 90%;
    height: 100%;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: url("${handIcon}"), auto;
  }
`;

const Header = styled.header`
  color: #333333;
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  width: 100%;
  height: 8%;

  #title-header-logo {
    display: flex;
    align-items: center;
    width: 14%;
    height: 100%;
  }

  #books-title {
    margin-left: 10%;
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 40px;
  }

  #title-header-user {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 0.75rem;
    width: 28%;
    height: 100%;

    span {
      font-weight: 500;
    }

    #title-logout-btn {
      padding-left: 4%;
    }
  }

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    padding: 1% 4% 1% 4%;
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    padding: 2% 0% 2% 0%;

    #title-welcome {
      display: none;
    }

    #books-title {
      margin-left: 18%;
    }
  }
`;

const Footer = styled.footer`
  color: #333333;
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 20px;

  span {
    font-weight: 500;
  }

  #itens-footer {
    display: flex;
    align-items: center;
  }

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    padding: 1% 4% 1% 4%;
    justify-content: flex-end;

    #itens-footer {
      width: 28%;
      justify-content: flex-end;

      .itens-footer-btn {
        padding-left: 4%;
      }
    }
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    justify-content: center;

    #itens-footer {
      width: 60%;
      justify-content: space-around;
    }

    #itens-footer :nth-child(1) {
      order: 2;
    }
    #itens-footer :nth-child(2) {
      order: 1;
    }
    #itens-footer :nth-child(3) {
      order: 3;
    }
  }
`;

const Main = styled.main`
  height: 84%;
  width: 100%;

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    padding: 2% 4% 0% 4%;
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    padding: 6% 0% 0% 0%;
    overflow-y: auto;
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

export { Container, HomeContainer, Header, Footer, Main, CustomBox };
