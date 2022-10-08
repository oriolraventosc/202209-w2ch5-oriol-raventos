class Cell {
  alive;

  live() {
    this.alive = true;
  }

  die() {
    this.alive = false;
  }

  resurrect() {
    this.alive = true;
  }
}

export default Cell;
