import arrayCreator from "../arrayCreator/arrayCreator.js";

const addCellsToTheBoard = () => {
  const column = arrayCreator(5, 5);
  for (let y = 0; y < column.length; y++) {
    for (let x = 0; x < column[y].length; x++) {
      column[0][1].isAlive = true;
      column[0][0].isAlive = true;
      column[0][2].isAlive = true;
      column[1][1].isAlive = true;
      column[1][0].isAlive = true;
      column[1][2].isAlive = true;
      column[3][1].isAlive = true;
      column[3][0].isAlive = true;
      column[3][2].isAlive = true;
      column[4][1].isAlive = true;
      column[4][0].isAlive = true;
    }
  }
  console.log(column);
  return column;
};

export default addCellsToTheBoard;
