export declare class Cells {
    private cells;
    constructor();
    private updateAvailableCells;
    blockCell(cell: HTMLElement | null): void;
    blockAllCells(): void;
    unblockAllCells(): void;
    getAvailableCells(): HTMLElement[];
    noAvailableCells(): boolean;
}
