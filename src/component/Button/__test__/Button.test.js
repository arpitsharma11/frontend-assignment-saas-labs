import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../index";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom styles", () => {
    render(<Button style={{ backgroundColor: "red" }}>Styled Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /styled button/i,
    });
    expect(buttonElement).toHaveStyle("background-color: red");
  });

  test("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(buttonElement).toBeDisabled();
  });
});
