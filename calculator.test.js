import { calculator } from "./index";

describe("calculator tests", () => {
  test("adds two positive integers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
});
