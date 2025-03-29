import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
    test("Renders button with title", () => {
        render(<Button title="Click Me" />);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    test("Renders left and right images", () => {
        render(<Button leftImageSrc="left.png" rightImageSrc="right.png" />);
        const images = screen.getAllByRole("img");
        expect(images[0]).toHaveAttribute("src", "left.png");
        expect(images[1]).toHaveAttribute("src", "right.png");
    });

    test("Triggers onClick event", () => {
        const handleClick = jest.fn();
        render(<Button title="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
