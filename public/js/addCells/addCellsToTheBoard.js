import arrayCreator from "../arrayCreator/arrayCreator.js";

const addCellsToTheBoard = () => {
  const column = arrayCreator();
  for (let y = 0; y < column.length; y++) {
    for (let x = 0; x < column[y].length; x++) {
      column[0][0] = "X";
      column[1][0] = "X";
      column[2][0] = "X";
      column[1][1] = "X";
      column[2][1] = "X";
    }
  }
  return column;
};

export default addCellsToTheBoard;
