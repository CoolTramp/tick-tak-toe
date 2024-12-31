type Player = 1 | 2;

type Combination = {
  value: number[];
  owner: Player | 0;
  combinationNumber: number;
};

type WinnerData = {
  winnerPlayer: 0 | Player;
  winnerCombination: number | null;
};

type BoardMethods = {
  setWinner: (player: Player) => void;
  getCurrentPlayer: () => Player;
  togglePlayer: () => Player;
  move: (cell: number, player: Player) => WinnerData | null;
};

type RobotMethods = {
  getOpponent: () => Player;
  getAvailableCells: () => HTMLElement[];
  getCombinations: () => Combination[];
};
