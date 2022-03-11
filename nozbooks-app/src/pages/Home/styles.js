import styled from "styled-components";
import bgi from "../../assets/images/background_home.svg";
import { Box } from "@mui/material";
import { styled as styledMui } from "@mui/system";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${bgi}") center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  span {
    font-weight: bold;
  }
  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    margin-top: 2%;
    width: 90%;
    height: 86%;
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    margin-top: 4%;
    width: 90%;
    height: 92%;
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
    margin-left: 8%;
    font-size: 22px;
  }

  #title-header-user {
    display: flex;
    align-items: center;
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
  }
`;

const Footer = styled.footer`
  color: #333333;

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    #itens-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 6%;
    }
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    #itens-footer {
      display: flex;
      justify-content: center;
      align-items: center;
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
  height: 100%;
  padding: 4%;
  /* Desktop properties*/
  @media screen and (min-width: 768px) {
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
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
