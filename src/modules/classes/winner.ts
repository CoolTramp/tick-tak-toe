export class Winner {
  private _winner: Player | 0 = 0;

  get winner() {
    return this._winner;
  }

  set(value: Player) {
    this._winner = value;
  }

  isWinner() {
    return this._winner === 0 ? false : true;
  }

  reset() {
    this._winner = 0;
  }
}
