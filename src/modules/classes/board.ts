import { Players } from "./players";
import { Figure } from "./figure";
import { Cells } from "./cells";
import { Strikethrough } from "./strikethrough/strikethrough";

import { DeterminWinner } from "./logic/determinWinner";

/**
 * The Game class, serves for saving game's data (current player)
 */

export class Board {
  private players = new Players();

  private figures = new Figure();
  private cells = new Cells();
  private strikethrough = new Strikethrough();

  private winner = new DeterminWinner();
  private setWinner: (player: Player) => void;

  public noAvailableCells = this.cells.noAvailableCells;

  constructor(setWinner: (player: Player) => void) {
    this.setWinner = setWinner;
  }

  /**
   * Unblocked all cells and unmark them
   * to rest only class cell
   */
  resetUI() {
    this.cells.unblockAllCells();
    this.strikethrough.remove();
  }

  makeMove(cell: HTMLElement): boolean | null {
    const cellNumber = this.getCellNumber(cell);
    if (cellNumber === null) return null;

    const player = this.players.getCurrentPlayer();
    const isWinner = this.winner.makeMove(cellNumber, player);

    this.markCell(cell);

    if (isWinner) {
      this.setWinner(isWinner.winnerPlayer as Player);
      this.strikethrough.create(isWinner.winnerCombination).show();
      this.cells.blockAllCells();

      return true;
    }

    this.togglePlayer();
    return false;
  }

  showFigureOnCell(button: HTMLElement | null) {
    this.figures.showFigureOnCell(button);
  }

  getAvailableCells() {
    return this.cells.getAvailableCells();
  }

  private markCell(cell: HTMLElement) {
    this.cells.blockCell(cell);
    this.figures.markFigureOnCell(cell);
  }

  private getCellNumber(cell: HTMLElement): number | null {
    const cellNumber: string | null = cell.getAttribute("data");
    return cellNumber ? Number(cellNumber) : null;
  }

  private togglePlayer() {
    return this.players.togglePlayer();
  }
}
