class Cell {
  alive;
  dead;

  isAlive() {
    this.alive = true;
  }

  die() {
    this.dead = true;
    this.alive = false;
  }

  resurrection() {
    this.dead = false;
    this.alive = true;
  }
}

export default Cell;
