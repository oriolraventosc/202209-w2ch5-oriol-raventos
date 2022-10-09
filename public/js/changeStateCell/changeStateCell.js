import checkNeighbourCells from "../checkNeighbourCells/checkNeighbourCells.js";
import addCellsToTheBoard from "../addCells/addCellsToTheBoard.js";

const changeState = () => {
  const column = addCellsToTheBoard();
  const neighbours = checkNeighbourCells();
  for (let y = 0; y < column.length; y++) {
    for (let x = 0; x < column[y].length; x++) {
      if (neighbours < 2 && column[y][x].isAlive) {
        column[y][x].isAlive = false;
        if (neighbours === 3) {
          column[y][x].isAlive = true;
        }
      } else if (neighbours > 2 || (neighbours === 3 && column[y][x].isAlive)) {
        column[y][x].isAlive = true;
      } else if (neighbours > 3) {
        column[y][x].isAlive = false;
      } else if (column[y][x].isAlive === false) {
        if (neighbours === 3) {
          column[y][x].isAlive = true;
        }
      }
    }
  }
  console.log(column);
};
export default changeState;
