/**
 * Choose random cell
 */
export class Robot {
  private getOpponent: () => Player;
  private getAvailableCells: () => HTMLElement[];
  private getCombinations: () => Combination[];

  private BEST = 4;

  constructor(methods: RobotMethods) {
    const { getOpponent, getAvailableCells, getCombinations } = methods;

    this.getOpponent = getOpponent;
    this.getAvailableCells = getAvailableCells;
    this.getCombinations = getCombinations;
  }

  /**
   * The best position to start from is 4 because
   * it allows for the most winning combinations, i.e., 4 combinations.
   * The average positions are 0, 2, 4, and 6. If one of these is occupied,
   * it can later lead to the development of 2 combinations.
   * The remaining positions will only provide 1 combination.
   * If there is only 1 number left in a combination, it needs to be chosen
   * to either win or prevent the opponent from winning.
   * Therefore, the move method searches for combinations with one number
   * remaining, then looks for the best combination,
   * selects one of the average positions, and if there are no average
   * positions available, it selects any remaining one.
   */
  move(): HTMLElement | null {
    const lastNumberOfCombination = this.combinationAlmostCompleted();

    if (lastNumberOfCombination) {
      return this.getHTMLCell(lastNumberOfCombination);
    } else if (this.isBestPosition()) {
      return this.getHTMLCell(this.BEST);
    } else {
      const availableCellsNumber = this.availableCellsNumber(
        this.getAvailableCells()
      );

      const severalPositions = availableCellsNumber.filter(
        (number) => number % 2 === 0
      );
      const cellNumber =
        severalPositions.length > 0
          ? this.randomElementFrom(severalPositions)
          : this.randomElementFrom(availableCellsNumber);

      return this.getHTMLCell(cellNumber);
    }
  }

  /**
   * Searches for combinations with one number remaining.
   * If the combination belongs to the robot, the method will return
   * that number and the robot will win. If such a combination
   * belongs to the opponent, it will select that combination
   * to prevent the opponent from winning.
   * @returns the number from the combination
   */
  private combinationAlmostCompleted() {
    let yourown = 0;
    let oponent = this.getCombinations().reduce(
      (acc: number[], combination) => {
        if (combination.value.length === 1) {
          acc.push(combination.value[0]);
          if (combination.owner !== this.getOpponent())
            yourown = combination.value[0];
        }

        return acc;
      },
      []
    );
    return yourown || this.randomElementFrom(oponent);
  }

  private randomElementFrom(cellsNumber: number[]) {
    return cellsNumber[this.getRandomIndex(cellsNumber.length)];
  }

  private getRandomIndex(range: number): number {
    return Math.floor(Math.random() * range);
  }

  private isBestPosition() {
    const cellsNumbers = this.availableCellsNumber(this.getAvailableCells());
    return cellsNumbers.find((number) => number === this.BEST);
  }

  private getHTMLCell(number: number): HTMLElement | null {
    return (
      this.getAvailableCells().find(
        (cell) => Number(cell.getAttribute("data")) === number
      ) || null
    );
  }

  private availableCellsNumber(cells: HTMLElement[]): number[] {
    return cells
      .map((cell) => Number(cell.getAttribute("data")))
      .filter((num) => !isNaN(num));
  }
}
