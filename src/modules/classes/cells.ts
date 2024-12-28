export class Cells {
  private cells: HTMLElement[] = [];

  constructor() {
    this.updateAvailableCells();
  }

  private updateAvailableCells() {
    this.cells = [];
    const cellElements: NodeListOf<HTMLElement> =
      document.querySelectorAll("#board > .cell");

    for (let cell of cellElements) {
      const classes = cell.getAttribute("class");
      if (!classes?.includes("block")) this.cells.push(cell);
    }
  }

  blockCell(cell: HTMLElement | null) {
    if (cell) {
      cell.classList.add("block");
      this.updateAvailableCells();
    }
  }

  blockAllCells() {
    this.cells.forEach((cell) => {
      cell.classList.add("block");
    });
    this.updateAvailableCells();
  }

  unblockAllCells() {
    const cells: NodeList = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      if (cell instanceof HTMLElement) {
        cell.setAttribute("class", "cell");
      }
    });
  }

  getAvailableCells(): HTMLElement[] {
    return this.cells;
  }

  noAvailableCells() {
    return this.getAvailableCells().length === 0 ? true : false;
  }
}
