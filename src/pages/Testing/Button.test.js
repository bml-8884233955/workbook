import { render, screen, fireEvent } from "@testing-library/react"

import Button from "./Button";

test("button renders and click works", () => {

    const mockFn = jest.fn();

    render(<Button onClick={mockFn} />);

    const button = screen.getByText("Click Me");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockFn).toHaveBeenCalledTimes(1);

})