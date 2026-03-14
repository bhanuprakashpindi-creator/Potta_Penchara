import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import MOCK_DATA from "../mock/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import UserContext from "../../utils/UserContext";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load The Body Components By searching burger", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  expect(screen.getAllByTestId("itemCard").length).toBe(8);
  const searchinput = screen.getByTestId("search");
  expect(searchinput).toBeInTheDocument();
  fireEvent.change(searchinput, { target: { value: "burger" } });
  fireEvent.click(screen.getByRole("button", { name: "Search" }));
  expect(screen.getAllByTestId("itemCard").length).toBe(1);
});

it("Should load The Body Component After Click on Top Resturants button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  expect(screen.getAllByTestId("itemCard").length).toBe(8);
  const topResbtn = screen.getByRole("button", { name: "Top Restaurants" });
  expect(topResbtn).toBeInTheDocument();
  fireEvent.click(topResbtn);
  expect(screen.getAllByTestId("itemCard").length).toBe(3);
});

it("Should Display the userName after the user give the name in input box", async () => {
  const mockSetUserName = jest.fn();
  await act(async () => {
    render(
      <Provider store={Store}>
        <BrowserRouter>
          <UserContext.Provider
            value={{
              loggedinUser: "Default Users",
              setUserName: mockSetUserName,
            }}>
            <Body />
          </UserContext.Provider>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
  });

  const inputbox = screen.getByTestId("userName");
  fireEvent.change(inputbox, { target: { value: "BannyPro" } });
  expect(mockSetUserName).toHaveBeenCalledWith("BannyPro");
});
