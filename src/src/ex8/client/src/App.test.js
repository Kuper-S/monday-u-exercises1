import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/TodoS/i);
  expect(linkElement).toBeInTheDocument();
});