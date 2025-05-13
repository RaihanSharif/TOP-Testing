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

describe("calculator multiply tests", () => {
  it("should multiply two positive integers", () => {
    expect(calculator.mult(2, 3)).toBe(6);
  });
  it("should multiply two negative ints", () => {
    expect(calculator.mult(-2, -3)).toBe(6);
  });
  it("should multiply a positive and a negative int", () => {
    expect(calculator.mult(-2, 3)).toBe(-6);
    expect(calculator.mult(2, -3)).toBe(-6);
  });
  it("should multiply floats", () =>
    expect(calculator.mult(1.5, 2.5)).toBeCloseTo(3.75));
  it("should multiply small floats close to the right value", () => {
    expect(calculator.mult(0.1, 0.2)).toBeCloseTo(0.02);
  });
});

describe("calculator divide tests", () => {
  it("should divide two positive integers", () => {
    expect(calculator.div(2, 3)).toBeCloseTo(0.6666666);
  });
  it("should divide two negative ints", () => {
    expect(calculator.div(-2, -3)).toBeCloseTo(0.666);
  });
  it("should divide a positive and a negative int", () => {
    expect(calculator.div(-2, 3)).toBeCloseTo(-0.666);
    expect(calculator.div(2, -3)).toBeCloseTo(-0.666);
  });
  it("should divide floats", () =>
    expect(calculator.div(1.5, 2.5)).toBeCloseTo(0.6));
  it("should divide small floats close to the right value", () => {
    expect(calculator.div(0.1, 0.2)).toBeCloseTo(0.5);
  });
});
