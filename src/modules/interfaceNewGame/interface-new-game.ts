const box: HTMLElement | null = document.getElementById("box");

export function showNewBox() {
  if (box) {
    box.classList.remove("hide-box");
    box.classList.add("show-box");
  }
}
