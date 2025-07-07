import { render, screen, fireEvent } from "@testing-library/react";
import SupportRequest from "../page/SupportRequest";
import { BrowserRouter } from "react-router-dom";

test("submits ticket", () => {
  render(
    <BrowserRouter>
      <SupportRequest />
    </BrowserRouter>,
  );
  fireEvent.change(screen.getByPlaceholderText(/device/i), {
    target: { value: "MacBook" },
  });
  fireEvent.change(screen.getByPlaceholderText(/describe/i), {
    target: { value: "No power" },
  });
  fireEvent.click(screen.getByText(/submit/i));
  expect(window.alert).toBeCalled();
});
