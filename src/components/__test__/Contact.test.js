import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should Load The Heading In The Contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should Load The Input Boxes In The Contact Us Component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input).not.toBe(4);
  });
  test("Should Load The placeholder In The Contact Us Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Message");

    expect(inputName).toBeInTheDocument;
  });
  test("Should Load The button name In The Contact Us Component", () => {
    render(<Contact />);

    const ButtonName = screen.getByText("Submit");

    expect(ButtonName).toBeInTheDocument;
  });
});
