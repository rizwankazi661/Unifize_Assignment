import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransactionTable from "../TransactionTable";

describe("TransactionTable Component", () => {
    test("renders table with correct headers", () => {
        render(<TransactionTable />);

        expect(screen.getByText("Date(UTC)")).toBeInTheDocument();
        expect(screen.getByText("To/From")).toBeInTheDocument();
        expect(screen.getByText("Amount")).toBeInTheDocument();
        expect(screen.getByText("Account")).toBeInTheDocument();
        expect(screen.getByText("Payment Method")).toBeInTheDocument();
        expect(screen.getByText("Attachment")).toBeInTheDocument();
    });
});