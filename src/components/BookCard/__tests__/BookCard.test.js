import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookCard from "..";

const bookMock = {
  authors: ["Júlio César Carvalho", "Márcia Xavier", "Ígor Carvalho"],
  title: "Aliquam et",
  description:
    "Aut beatae deserunt omnis maiores tempora possimus. Consequuntur cumque ut reiciendis dolor. Tempore tempore consequatur id eum cumque est est facere totam. Unde est sint ut repudiandae officia est odit. Repellat non rerum suscipit. Aspernatur et ut quidem et eos voluptatem aliquam.\n \rSuscipit exercitationem officiis voluptatem fuga blanditiis laboriosam nihil. Ipsa magnam in iste ut est possimus perspiciatis mollitia fugiat. Nemo qui officia quisquam sed facilis quia. Quia iure sit quas dolorem nam sit neque.",
  pageCount: 947,
  category: "Biografias",
  imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/appnoz/Book-8.jpg",
  language: "Inglês",
  isbn10: "7143569875",
  isbn13: "599-7143569875",
  publisher: "Albuquerque S.A.",
  published: 2021,
  id: "61c9c5246189745dcd504e2d",
};

const handleClickModal = jest.fn();

const renderComponent = () => {
  return render(<BookCard book={bookMock} handleClickModal={handleClickModal} />);
};

describe("BookCard Tests", () => {
  test("Should render correctly", () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Check BookCard is visible", () => {
    renderComponent();
    const bookCard = screen.getByTestId("card-testid");
    expect(bookCard).toBeVisible();
    expect(bookCard).toBeInTheDocument();
  });

  test("Check handleClickModal is called after click on modal", () => {
    renderComponent();
    const bookCard = screen.getByTestId("card-area-testid");
    fireEvent.click(bookCard);
    expect(handleClickModal).toHaveBeenCalledTimes(1);
  });
});
