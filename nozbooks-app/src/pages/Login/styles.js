import styled from "styled-components";
import bgi from "../../assets/images/background_login.svg";

const Container = styled.div`
  height: 100vh;
  background: url("${bgi}") center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginContainer = styled.div`
  color: #ffffff;

  #title-div {
    font-size: 1.75rem;
    line-height: 40px;
    font-weight: 300;
  }

  /* Desktop properties*/
  @media screen and (min-width: 768px) {
    margin: 10% 0 0 8%;
    width: 30%;
    height: 20%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    #title-div {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 8%;
      div {
        padding-right: 2%;
      }
    }
  }

  /* Mobile properties*/
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4%;

    #title-div {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 16%;
      div {
        padding-right: 2%;
      }
    }
  }
`;

export { Container, LoginContainer };
