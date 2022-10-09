import arrayCreator from "./arrayCreator.js";

describe("Given the function arrayCreator", () => {
  describe("When it receives column", () => {
    test("Then it should return an array board with a length of 8", () => {
      const returnInput = 5;

      const createBoard = arrayCreator(5, 5).length;

      expect(createBoard).toBe(returnInput);
    });
  });
});
