// "hide-fresh-btn", "show-fresh-btn";
export class FreshBTN {
  private btn = document.getElementById("btn-fresh");

  show() {
    this.btn?.classList.remove("hide-fresh-btn");
    this.btn?.classList.add("show-fresh-btn");
  }

  hide() {
    this.btn?.classList.remove("show-fresh-btn");
    this.btn?.classList.add("hide-fresh-btn");
  }
}
