import { render, screen } from "@testing-library/react";
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
