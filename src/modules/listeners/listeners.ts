import { newBoard, gameManager } from "../main";
import { FreshBTN } from "../classes/btn-fresh";

const cells = gameManager.board.getAvailableCells();
const freshBTN = new FreshBTN();

const handleCellClick = (event: MouseEvent) => {
  const cell = event.target as HTMLElement;

  if (!cell || !cell.hasAttribute("data")) {
    console.error("Clicked element is not a valid cell.");
    return;
  }

  try {
    gameManager.board.makeMove(cell);

    const cellRobot = gameManager.robotMove();
    if (cellRobot) {
      gameManager.board.makeMove(cellRobot);
    }

    if (gameManager.isGameOver()) {
      freshBTN.show();
    }
  } catch (error) {
    console.error("An error occurred while making a move:", error);
  }
};

const handleMouseOver = (event: MouseEvent) => {
  gameManager.board.showFigureOnCell(event.target as HTMLElement);
};

const handleMouseOut = (event: MouseEvent) => {
  gameManager.board.showFigureOnCell(event.target as HTMLElement);
};

for (let cell of cells) {
  cell.addEventListener("click", handleCellClick);
  cell.addEventListener("mouseover", handleMouseOver);
  cell.addEventListener("mouseout", handleMouseOut);
}

document.getElementById("btn-fresh")?.addEventListener("click", () => {
  newBoard();
  freshBTN.hide();
});
