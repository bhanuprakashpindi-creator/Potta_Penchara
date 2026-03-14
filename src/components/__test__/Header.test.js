import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "../../utils/Store";
it("Should Render The Header Component with the Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const LoginButton = screen.getByRole("button");

  expect(LoginButton).toBeInTheDocument();
});
it("Should Render The Header Component with the cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cart = screen.getByText("🛒-(0 items)");

  expect(cart).toBeInTheDocument();
});
it("Should Render The Header Component with the cart Logo", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cart = screen.getByText(/🛒/);

  expect(cart).toBeInTheDocument();
});
it("Should check The change of login button to logout when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const LoginButton = screen.getByRole("button");

  fireEvent.click(LoginButton);

  const Logout = screen.getByText("logout");

  expect(Logout).toBeInTheDocument();
});
