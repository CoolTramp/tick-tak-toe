import { showNewBox } from "../interfaceNewGame/interface-new-game";
const btnNewGame: HTMLElement | null = document.getElementById("btn-new-game");

if (btnNewGame) {
  btnNewGame.addEventListener("click", (event) => {
    showNewBox();
  });
}
