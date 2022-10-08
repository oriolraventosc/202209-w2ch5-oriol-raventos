import arrayCreator from "./arrayCreator.js";

describe("Given the function arrayCreator", () => {
  describe("When it receives column", () => {
    test("Then it should return an array board", () => {
      const returnInput = [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ];

      const createBoard = arrayCreator();

      expect(createBoard).toStrictEqual(returnInput);
    });
  });
});
