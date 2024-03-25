// NotFound.test.js
import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

test("renders 404 message", () => {
  const { getByText } = render(<NotFound />);
  const headingElement = getByText(/404 - Page Not Found/i);
  const paragraphElement = getByText(
    /The page you are looking for does not exist/i
  );

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
