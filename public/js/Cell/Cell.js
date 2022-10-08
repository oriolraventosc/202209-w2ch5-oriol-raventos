class Cell {
  isAlive;

  live() {
    this.isAlive = true;
  }

  die() {
    this.isAlive = false;
  }

  resurrect() {
    this.isAlive = true;
  }
}

export default Cell;
