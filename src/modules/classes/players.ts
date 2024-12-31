export class Players {
  private currentPlayer: Player = 1;

  togglePlayer(): Player {
    this.currentPlayer = this.getOpponent();
    // this.currentPlayer = this.getCurrentPlayer() === 1 ? 2 : 1;
    return this.currentPlayer;
  }

  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  reset() {
    this.currentPlayer = 1;
  }
  getOpponent() {
    return this.getCurrentPlayer() === 1 ? 2 : 1;
  }
}
