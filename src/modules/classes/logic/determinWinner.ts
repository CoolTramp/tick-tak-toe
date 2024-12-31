type Combinations = Combination[];

export class DeterminWinner {
  /**
   * the value - the winner combination (if the player will be choose
   * all numbers from the combination, he will be win)
   * the owner - the user's number
   */
  private combinations: Combinations = [
    { value: [0, 1, 2], owner: 0, combinationNumber: 0 },
    { value: [2, 5, 8], owner: 0, combinationNumber: 1 },
    { value: [0, 4, 8], owner: 0, combinationNumber: 2 },
    { value: [3, 4, 5], owner: 0, combinationNumber: 3 },
    { value: [1, 4, 7], owner: 0, combinationNumber: 4 },
    { value: [2, 4, 6], owner: 0, combinationNumber: 5 },
    { value: [6, 7, 8], owner: 0, combinationNumber: 6 },
    { value: [0, 3, 6], owner: 0, combinationNumber: 7 },
  ];

  /**
   * The numbers of available cells. Will be delete whene a player
   * will be choose it
   */
  private availableCells: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  private _winner: Player | 0 = 0;
  private _winnerCombination: number | null = null;
  /**
   * To accepts the current player's move
   * @param cell - the cell's number which the user chose
   * @param player - the player's number, may be 1 or 2
   * @returns
   */
  makeMove(cell: number, player: Player): WinnerData | null {
    if (!this.isCellInArray(cell, this.availableCells)) return null;
    this.deleteChosenCellFromAvailables(cell);
    this.recordPlayerMove(cell, player);

    return this.findWinner() ? this.getWinner() : null;
  }

  private findWinner(): boolean | null {
    const winningCombination = this.combinations.find((combination) =>
      this.isWinningCombination(combination)
    );
    if (winningCombination) {
      this.assignWinner(winningCombination);
      return true;
    }
    return null;
  }

  private assignWinner(winningCombination: Combination): void {
    this._winner = winningCombination.owner;
    this._winnerCombination = this.getWinnerCombinationNumber();
  }

  private getWinner() {
    return {
      winnerPlayer: this._winner,
      winnerCombination: this._winnerCombination,
    };
  }

  private getWinnerCombinationNumber(): number | null {
    const winningCombination = this.combinations.find(
      (combination) => combination.value.length === 0
    );
    return winningCombination ? winningCombination.combinationNumber : null;
  }

  private deleteChosenCellFromAvailables(cell: number): void {
    this.removeFromArray(this.availableCells, cell);
  }

  /**
   * Iterates through all winning combinations and processes the current move.
   * A winning combination is when a player has selected all numbers in it.
   * If a player selects a number already claimed by the opponent,
   * the combination becomes invalid for that player.
   *
   * @param cell - The index of the cell chosen by the player.
   * @param player - The player's number (1 or 2).
   */
  private recordPlayerMove(cell: number, player: Player) {
    this.combinations = this.combinations.filter((combination) => {
      if (!this.isCellInArray(cell, combination.value)) return true;

      if (this.isCombinationBelongToSomePlayer(combination)) {
        this.assignCellToPlayer(combination, cell, player);
      } else if (this.isOwnedByOpponent(combination, player)) {
        return false;
      } else {
        this.removeCellFromCombination(combination, cell);
      }

      return true;
    });
  }

  private isCellInArray(cell: number, array: number[]): boolean {
    return array.includes(cell);
  }

  private isCombinationBelongToSomePlayer(combination: Combination): boolean {
    return combination.owner === 0;
  }

  private isOwnedByOpponent(combination: Combination, player: Player): boolean {
    return combination.owner !== 0 && combination.owner !== player;
  }

  private isWinningCombination(combination: Combination): boolean {
    return combination.value.length === 0;
  }

  private assignCellToPlayer(
    combination: Combination,
    cell: number,
    player: Player
  ): void {
    this.removeCellFromCombination(combination, cell);
    combination.owner = player;
  }

  private removeCellFromCombination(
    combination: Combination,
    cell: number
  ): void {
    this.removeFromArray(combination.value, cell);
  }

  private removeFromArray(array: number[], element: number): void {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  getCombinations() {
    return this.combinations;
  }
}

// const game = new DeterminWinner();
// console.log(game.makeMove(0, 1));
// console.log(game.makeMove(6, 2));
// console.log(game.makeMove(1, 1));
// console.log(game.makeMove(4, 2));
// console.log(game.makeMove(2, 1));
