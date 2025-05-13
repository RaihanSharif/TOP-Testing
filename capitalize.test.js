import { capitalize } from "./index";

describe.skip("capitalize tests", () => {
  test('capitalizes string "asdf" to "Asdf', () => {
    expect(capitalize("asdf")).toEqual("Asdf");
  });

  test(`capitalized string "Amazing" remains capitalized`, () => {
    expect(capitalize("Amazing")).toMatch(/Amazing/);
  });

  test("string beginning with a non-alphabetic character is not capitalized", () => {
    expect(capitalize("0wtf")).toEqual("0wtf");
  });

  // this is not a good idea, but just experimenting, throw errors if input is invalid

  // the function throwing the exception nees to be invoked withing a wrapper function
  // otherwise the toThrow assertion will fail.
  test("empty string does not throw error", () => {
    expect(() => capitalize("")).not.toThrow();
  });
});
