import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
    test("Renders avatar according to the name provided", () => {
        render(<Avatar text="Rizwan" />);
        expect(screen.getByText("R")).toBeInTheDocument();
    });

    test("Renders question mark when text is empty", () => {
        render(<Avatar text="" />);
        expect(screen.getByText("?")).toBeInTheDocument();
    });
});
