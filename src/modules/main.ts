import { GameManager } from "./classes/gameManager";

export let gameManager = new GameManager();

export function newBoard() {
  gameManager.newBoard();
}

// Инициализируем игру при загрузке страницы
window.onload = () => {
  //   console.log("Game initialized with player:", game.getCurrentPlayer());
};
