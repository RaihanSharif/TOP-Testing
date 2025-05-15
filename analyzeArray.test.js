import { analyzeArray } from "./index";

describe("analyze array tests", () => {
  it("return object with attribute 'average'", () => {
    expect(analyzeArray([3, 4, 5])).toMatchObject({
      average: 4,
      min: expect.any(Number),
      max: expect.any(Number),
      length: expect.any(Number),
    });
  });

  it("return object with attribute 'min'", () => {
    expect(analyzeArray([3, 4, 5])).toMatchObject({
      average: expect.any(Number),
      min: 3,
      max: expect.any(Number),
      length: expect.any(Number),
    });
  });

  it("return object with attribute 'max'", () => {
    expect(analyzeArray([3, 4, 5])).toMatchObject({
      average: expect.any(Number),
      min: expect.any(Number),
      max: 5,
      length: expect.any(Number),
    });
  });

  it("return object with attribute 'length'", () => {
    expect(analyzeArray([3, 4, 5])).toMatchObject({
      average: expect.any(Number),
      min: expect.any(Number),
      max: expect.any(Number),
      length: 3,
    });
  });
});
