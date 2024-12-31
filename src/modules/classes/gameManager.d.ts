import { Board } from "./board";
import { Robot } from "./robot/robot";
export declare class GameManager {
    board: Board;
    robot: Robot;
    private currentWinner;
    private players;
    private determinWinner;
    constructor();
    newBoard(): void;
    robotMove(): HTMLElement | null;
    isGameOver(): boolean;
    private getRobotMethods;
    private getBoardMethods;
}
