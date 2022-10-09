import addCellsToTheBoard from "./addCellsToTheBoard.js";

describe("Given the function addCellsToTheBoard", () => {
  describe("When we add cells in column[0]", () => {
    test("Then it should add alive cells at the column[0]", () => {
      const expectedCells = true;

      const addCells = addCellsToTheBoard();

      expect(addCells).toStrictEqual(expectedCells);
    });
  });
});
