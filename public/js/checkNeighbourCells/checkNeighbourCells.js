import addCellsToTheBoard from "../addCells/addCellsToTheBoard.js";

export const checkNeighbourCells = () => {
  let neighbours;
  const column = addCellsToTheBoard();
  for (let y = 0; y < column.length; y++) {
    for (let x = 0; x < column[y].length; x++) {
      neighbours = 0;
      if (column[y][x].isAlive) {
        if (column[y + 1] !== undefined && column[y + 1][x] !== undefined) {
          neighbours++;
          if (neighbours < 2) {
            column[y][x].isAlive = false;
            if (neighbours > 3) {
              column[y][x].isAlive = true;
            }
          } else if (neighbours > 2 || neighbours === 3) {
            column[y][x].isAlive = true;
          }
        }
      } else {
        column[y][x].isAlive = true;
      }
    }
  }
  console.log(column);
};

export default checkNeighbourCells;
