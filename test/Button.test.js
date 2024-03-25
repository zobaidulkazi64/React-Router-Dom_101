// Button.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with correct text", () => {
  const { getByText } = render(<Button label="Click me" />);
  const button = getByText("Click me");
  expect(button).toBeInTheDocument();
});

test("calls onClick prop when button is clicked", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button label="Click me" onClick={onClick} />);
  const button = getByText("Click me");
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
