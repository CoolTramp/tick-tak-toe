/**
 * The Game class, serves for saving game's data (current player)
 */
export declare class Board {
    private figures;
    private cells;
    private strikethrough;
    private setWinner;
    private getCurrentPlayer;
    private togglePlayer;
    private move;
    noAvailableCells: () => boolean;
    constructor(methods: BoardMethods);
    /**
     * Unblocked all cells and unmark them
     * to rest only class cell
     */
    resetUI(): void;
    makeMove(cell: HTMLElement): boolean | null;
    showFigureOnCell(button: HTMLElement | null): void;
    getAvailableCells(): HTMLElement[];
    private markCell;
    private getCellNumber;
}
