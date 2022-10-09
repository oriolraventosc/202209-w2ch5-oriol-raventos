import addCellsToTheBoard from "../addCells/addCellsToTheBoard.js";

const checkNeighbourCells = () => {
  let column = addCellsToTheBoard();
  for (let y = 0; y < column.length; y++) {
    for (let x = 0; x < column[y].length; x++) {
      let neighbours1 = 0;
      let neighbours2 = 0;
      let neighbours3 = 0;
      let neighbours4 = 0;
      let neighbours5 = 0;
      let neighbours6 = 0;
      if (column[y][x]) {
        if (column[y + 1] !== undefined && column[y + 1][x] !== undefined) {
          neighbours1 = 1;
        }
        if (column[y - 1] !== undefined && column[y - 1][x] !== undefined) {
          neighbours2 = 1;
        }
        if (column[y + 1] !== undefined && column[y][x - 1] !== undefined) {
          neighbours3 = 1;
        }
        if (column[y - 1] !== undefined && column[y][x + 1] !== undefined) {
          neighbours4 = 1;
        }
        if (column[y - 1] !== undefined && column[y][x] !== undefined) {
          neighbours5 = 1;
        }
        if (column[y] !== undefined && column[y][x - 1] !== undefined) {
          neighbours6 = 1;
        }
        const neighboursCount =
          neighbours1 +
          neighbours2 +
          neighbours3 +
          neighbours4 +
          neighbours5 +
          neighbours6;
        if (
          (column[y][x].isAlive && neighboursCount < 2) ||
          (neighboursCount > 3 && column[y][x].isAlive === true)
        ) {
          column[y][x].isAlive = false;
        } else if (column[y][x].isAlive === false && neighboursCount === 3) {
          column[y][x].isAlive = true;
        }
      }
    }
  }
  let newColumn = [];
  newColumn = column;
  console.log(newColumn);
  column = newColumn;
};

export default checkNeighbourCells;
