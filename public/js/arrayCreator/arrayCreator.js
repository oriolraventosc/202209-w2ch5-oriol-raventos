import Cell from "../Cell/Cell.js";

const arrayCreator = (columnSize, rowsSize) => {
  let row = [];
  const board = [];
  for (let y = 0; y < columnSize; y++) {
    row = [];
    for (let x = 0; x < rowsSize; x++) {
      row[x] = new Cell();
    }
    board.push(row);
  }

  return board;
};

export default arrayCreator;
