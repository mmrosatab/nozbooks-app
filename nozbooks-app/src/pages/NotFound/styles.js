import styled from "styled-components";
import bgi from "../../assets/images/background_home.svg";

const Container = styled.div`
  height: 100vh;
  background: url("${bgi}") center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Container;
