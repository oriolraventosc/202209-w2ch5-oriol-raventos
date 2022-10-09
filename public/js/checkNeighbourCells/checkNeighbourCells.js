import addCellsToTheBoard from "../addCells/addCellsToTheBoard.js";

const checkNeighbourCells = () => {
  let neighbours;
  const column = addCellsToTheBoard();
  for (let y = 0; y < column.length; y++) {
    neighbours = 0;
    for (let x = 0; x < column[y].length; x++) {
      if (column[y][x]) {
        if (column[y + 1] !== undefined && column[y + 1][x] !== undefined) {
          neighbours++;
        } else if (
          column[y - 1] !== undefined &&
          column[y - 1][x] !== undefined
        ) {
          neighbours++;
        } else if (
          column[y + 1] !== undefined &&
          column[y][x - 1] !== undefined
        ) {
          neighbours++;
        } else if (
          column[y - 1] !== undefined &&
          column[y][x + 1] !== undefined
        ) {
          neighbours++;
        } else if (column[y - 1] !== undefined && column[y][x] !== undefined) {
          neighbours++;
        } else if (column[y] !== undefined && column[y][x - 1] !== undefined) {
          neighbours++;
        }
        if (
          (column[y][x].isAlive && neighbours < 2) ||
          (neighbours > 3 && column[y][x].isAlive === true)
        ) {
          column[y][x].isAlive = false;
        } else if (column[y][x].isAlive === false && neighbours === 3) {
          column[y][x].isAlive = true;
        }
      }
    }
  }
  console.log(column);
};

export default checkNeighbourCells;
