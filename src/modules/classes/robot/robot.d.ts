/**
 * Choose random cell
 */
export declare class Robot {
    private getOpponent;
    private getAvailableCells;
    private getCombinations;
    private BEST;
    constructor(methods: RobotMethods);
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
    move(): HTMLElement | null;
    /**
     * Searches for combinations with one number remaining.
     * If the combination belongs to the robot, the method will return
     * that number and the robot will win. If such a combination
     * belongs to the opponent, it will select that combination
     * to prevent the opponent from winning.
     * @returns the number from the combination
     */
    private combinationAlmostCompleted;
    private randomElementFrom;
    private getRandomIndex;
    private isBestPosition;
    private getHTMLCell;
    private availableCellsNumber;
}
