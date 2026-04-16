import { render, screen } from "@testing-library/react";

import InputBox from "./InputBox";

test("input renders correctly", () => {
    render(<InputBox />);
    const input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
}) 