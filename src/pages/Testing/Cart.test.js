import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

test("cart initial value is 0", () => {
    render(<Cart />);

    expect(screen.getByText("Total Items: 0")).toBeInTheDocument();
});

test("adds item to cart", () => {
    render(<Cart />);

    const button = screen.getByText("Add to Cart");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText("Total Items: 2")).toBeInTheDocument();
});