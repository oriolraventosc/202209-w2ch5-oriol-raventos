import Cell from "./Cell.js";

describe("Given the class 'Cell'", () => {
  describe("When the function receives new Cell()", () => {
    test("Then it should return a new Cell object with the isAlive property 'false'", () => {
      const expectedCell = new Cell();

      const newCell = new Cell();

      expect(newCell).toStrictEqual(expectedCell);
    });
  });
});
