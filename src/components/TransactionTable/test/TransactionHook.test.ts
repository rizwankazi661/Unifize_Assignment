import { renderHook, act } from "@testing-library/react";
import useTransactions from "../Transaction.hook";

describe("useTransactions Hook", () => {
  test("should format timestamp correctly", () => {
    const { result } = renderHook(() => useTransactions());
    const formattedDate = result.current.formatDate(1704067200);
    expect(formattedDate).toMatch(/Jan \d+/);
  });
});
