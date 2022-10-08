import addCellsToTheBoard from "./addCellsToTheBoard.js";

describe("Given the function addCellsToTheBoard", () => {
  describe("When we add cells in column[0][0], column[1][0], column[2][0], column[1][1] and at column[2][1]", () => {
    test("Then it should add cells at the columns column[0][0], column[1][0], column[2][0], column[1][1] and at column[2][1]", () => {
      const expectedCells = [
        ["X", "", "", "", "", ""],
        ["X", "X", "", "", "", ""],
        ["X", "X", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ];

      const addCells = addCellsToTheBoard();

      expect(addCells).toStrictEqual(expectedCells);
    });
  });
});
