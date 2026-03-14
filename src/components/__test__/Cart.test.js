import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import RestaurantMenuMock from "../../utils/RestaurantMenuMock";
import { act } from "react";
import Store from "../../utils/Store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurantMenuMock);
    },
  });
});

it("Should Add the Items into Cart and Load The Items in Cart Page", async () => {
  await act(async () => {
    render(
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>,
    );
  });
  expect(screen.getByText("🛒-(0 items)")).toBeInTheDocument();

  const accodianHeader = screen.getByText("Recommended (7)");
  fireEvent.click(accodianHeader);
  expect(screen.getAllByTestId("menuItems").length).toBe(7);
  const addbtn = screen.getAllByText("Add+");
  fireEvent.click(addbtn[0]);
  expect(screen.getByText("🛒-(1 items)")).toBeInTheDocument();
  fireEvent.click(addbtn[1]);
  expect(screen.getByText("🛒-(2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("menuItems").length).toBe(9);
  const removeItem = screen.getByRole("button", { name: "Remove Last Item" });
  fireEvent.click(removeItem);
  expect(screen.getAllByTestId("menuItems").length).toBe(8);
  const clearCart = screen.getByRole("button", { name: "ClearCart" });
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("menuItems").length).toBe(7);
});
