export class Players extends EventTarget {
  private currentPlayer: Player = 1;

  togglePlayer(): Player {
    this.currentPlayer = this.getCurrentPlayer() === 1 ? 2 : 1;
    return this.currentPlayer;
  }

  getCurrentPlayer(): Player {
    return this.currentPlayer;
  }
}
