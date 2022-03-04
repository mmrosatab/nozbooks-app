import styled from "styled-components";
import bgi from "../../assets/images/background_home.svg";

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
  background-color: red;

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
  background-color: green;
  width: 100%;
  height: 8%;

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    padding: 1% 4% 1% 4%;
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    padding: 2% 0% 2% 0%;
  }
`;

const Footer = styled.footer`
  color: #333333;

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
  }
`;

const Main = styled.main`
  /* Desktop properties*/
  @media screen and (min-width: 768px) {
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
  }
`;

export { Container, HomeContainer, Header, Footer, Main };
