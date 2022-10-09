import Cell from "../Cell/Cell.js";

describe("Given the function addCellsToTheBoard", () => {
  describe("When we add cells in column[0]", () => {
    test("Then it should add alive cells at the column[0]", () => {
      const deadCell = new Cell();

      const addDeadCells = new Cell();

      expect(addDeadCells).toStrictEqual(deadCell);
    });
  });
});
