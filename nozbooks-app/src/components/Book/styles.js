import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100px;

  .image-book img {
    max-height: 100%;
  }

  .infos {
    margin-left: 8%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info-title-authors {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .info-book {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default Container;
