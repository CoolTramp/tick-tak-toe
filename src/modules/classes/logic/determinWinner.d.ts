type Combinations = Combination[];
export declare class DeterminWinner {
    /**
     * the value - the winner combination (if the player will be choose
     * all numbers from the combination, he will be win)
     * the owner - the user's number
     */
    private combinations;
    /**
     * The numbers of available cells. Will be delete whene a player
     * will be choose it
     */
    private availableCells;
    private _winner;
    private _winnerCombination;
    /**
     * To accepts the current player's move
     * @param cell - the cell's number which the user chose
     * @param player - the player's number, may be 1 or 2
     * @returns
     */
    makeMove(cell: number, player: Player): WinnerData | null;
    private findWinner;
    private assignWinner;
    private getWinner;
    private getWinnerCombinationNumber;
    private deleteChosenCellFromAvailables;
    /**
     * Iterates through all winning combinations and processes the current move.
     * A winning combination is when a player has selected all numbers in it.
     * If a player selects a number already claimed by the opponent,
     * the combination becomes invalid for that player.
     *
     * @param cell - The index of the cell chosen by the player.
     * @param player - The player's number (1 or 2).
     */
    private recordPlayerMove;
    private isCellInArray;
    private isCombinationBelongToSomePlayer;
    private isOwnedByOpponent;
    private isWinningCombination;
    private assignCellToPlayer;
    private removeCellFromCombination;
    private removeFromArray;
    getCombinations(): Combinations;
}
export {};
