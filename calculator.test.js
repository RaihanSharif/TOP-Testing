import { calculator } from "./index";

describe("calculator add tests", () => {
  test("adds two positive integers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  it("should add two negative ints", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });
  it("should add a positive and a negative int", () => {
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(2, -3)).toBe(-1);
  });
  it("should add floats", () => expect(calculator.add(1.5, 2.5)).toBe(4));
  it("should add small floats close to the right value", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("calculator subtract tests", () => {
  it("should subtract two positive integers", () => {
    expect(calculator.sub(2, 3)).toBe(-1);
  });
  it("should sub two negative ints", () => {
    expect(calculator.sub(-2, -3)).toBe(1);
  });
  it("should sub a positive and a negative int", () => {
    expect(calculator.sub(-2, 3)).toBe(-5);
    expect(calculator.sub(2, -3)).toBe(5);
  });
  it("should sub floats", () => expect(calculator.sub(1.5, 2.5)).toBe(-1));
  it("should sub small floats close to the right value", () => {
    expect(calculator.sub(0.1, 0.2)).toBeCloseTo(-0.1);
  });
});
