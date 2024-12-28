import { Board } from "./board";
import { Winner } from "./winner";

export class GameManager {
  public board: Board;
  public currentWinner: Winner;

  constructor() {
    this.currentWinner = new Winner();
    this.board = new Board(this.setWinner.bind(this));
  }

  newBoard() {
    this.board.resetUI();
    this.board = new Board(this.setWinner.bind(this));
    this.currentWinner.reset();
  }

  setWinner(player: Player) {
    this.currentWinner.set(player);
  }

  isGameOver() {
    return this.currentWinner.isWinner() || this.board.noAvailableCells();
  }
}
