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

  .p-title {
    font-weight: 500;
    line-height: 20px;
    color: #333333;
  }

  .p-authors,
  .p-author {
    color: #2e63f7;
    font-weight: 400;
  }

  .p-page-count,
  .p-publisher,
  .p-published {
    color: #999999;
  }

  @media screen and (min-width: 768px) {
    .p-title {
      font-size: calc(0.1rem + 0.7vw);
    }

    .p-authors,
    .p-author {
      font-size: calc(0.1rem + 0.6vw);
    }

    .p-page-count,
    .p-publisher,
    .p-published {
      font-size: calc(0.1rem + 0.6vw);
    }
  }

  @media screen and (max-width: 767px) {
    .p-title {
      font-size: calc(0.86rem);
    }

    .p-authors,
    .p-author {
      font-size: calc(0.75rem);
    }

    .p-page-count,
    .p-publisher,
    .p-published {
      font-size: calc(0.85rem);
    }
  }
`;

export default Container;
