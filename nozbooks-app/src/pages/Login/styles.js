import styled from "styled-components";
import bgi from "../../assets/images/background_login.svg";

const Container = styled.div`
  background-image: url("${bgi}");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
