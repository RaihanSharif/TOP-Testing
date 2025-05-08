import { capitalize } from "./index";

test('capitalizes string "asdf" to "Asdf', () => {
  expect(capitalize("asdf")).toEqual("Asdf");
});
