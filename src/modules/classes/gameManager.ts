import { Board } from "./board";
import { Winner } from "./winner";
import { Robot } from "./robot/robot";
import { Players } from "./players";
import { DeterminWinner } from "./logic/determinWinner";

export class GameManager {
  public board: Board;
  public robot: Robot;

  private currentWinner: Winner;
  private players: Players;
  private determinWinner: DeterminWinner;

  constructor() {
    this.players = new Players();
    this.currentWinner = new Winner();
    this.determinWinner = new DeterminWinner();

    this.board = new Board(this.getBoardMethods());
    this.robot = new Robot(this.getRobotMethods());
  }

  newBoard() {
    this.board.resetUI();
    this.determinWinner = new DeterminWinner();
    this.board = new Board(this.getBoardMethods());
    this.robot = new Robot(this.getRobotMethods());
    this.currentWinner.reset();
  }

  robotMove() {
    return this.robot.move();
  }

  isGameOver() {
    return this.currentWinner.isWinner() || this.board.noAvailableCells();
  }

  private getRobotMethods() {
    return {
      getOpponent: this.players.getOpponent.bind(this.players),
      getAvailableCells: this.board.getAvailableCells.bind(this.board),
      getCombinations: this.determinWinner.getCombinations.bind(
        this.determinWinner
      ),
    };
  }

  private getBoardMethods() {
    return {
      setWinner: this.currentWinner.set.bind(this.currentWinner),
      getCurrentPlayer: this.players.getCurrentPlayer.bind(this.players),
      togglePlayer: this.players.togglePlayer.bind(this.players),
      move: this.determinWinner.makeMove.bind(this.determinWinner),
    };
  }
}
