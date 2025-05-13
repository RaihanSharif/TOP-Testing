import { caesarCipher } from "./index.js";

describe("caesar cipher tests", () => {
  it("should convert 'a' to 'b' given shift of 1", () => {
    expect(caesarCipher("a", 1)).toEqual("b");
  });

  it("should convert 'abcd' to 'defg' given shift of 3", () => {
    expect(caesarCipher("abcd", 3)).toEqual("defg");
  });

  it("should wrap around lower case 'xyz' to 'abc' given shift of 3", () => {
    expect(caesarCipher("xyz", 3)).toEqual("abc");
  });

  it("should wrap around uppercases case 'XYZ' to 'ABC' given shift of 3", () => {
    expect(caesarCipher("XYZ", 3)).toEqual("ABC");
  });

  it("should keep non-letter chars as is", () => {
    expect(caesarCipher("X,YZ", 4)).toEqual("B,CD");
  });
});
