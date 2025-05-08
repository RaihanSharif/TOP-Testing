import { reverseString } from "./index";

test("reverses a string of 2 chars, 'as' to 'sa'", () => {
  expect(reverseString("as")).toEqual("sa");
});

test("reverse one word 'hello' to 'olleh'", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("reverse a long string with spaces", () => {
  expect(reverseString("how are you mate")).toMatch(/etam uoy era woh/);
});

test("undo reverse", () => {
  expect(reverseString("etam uoy era woh")).toMatch(/how are you mate/);
});
