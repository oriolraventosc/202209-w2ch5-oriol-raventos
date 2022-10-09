class Cell {
  isAlive = false;

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
