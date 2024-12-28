export class Strikethrough {
  private places = [
    { combination: 0, class: "horizontal show", cellPlace: 1 },
    { combination: 1, class: "vertical show", cellPlace: 5 },
    { combination: 2, class: "left-diagonal show", cellPlace: 0 },
    { combination: 3, class: "horizontal show", cellPlace: 4 },
    { combination: 4, class: "vertical show", cellPlace: 4 },
    { combination: 5, class: "right-diagonal show", cellPlace: 2 },
    { combination: 6, class: "horizontal show", cellPlace: 7 },
    { combination: 7, class: "vertical show", cellPlace: 3 },
  ];

  private box: HTMLElement | null = document.getElementById("board");
  private _winnerCombination: number | null = null;
  private _strikethrough: HTMLElement | null = null;

  create(winnerCombination: number | null) {
    if (winnerCombination !== null) {
      this.saveWinnerCombination(winnerCombination);
      this.createStrikethrouth();
    }
    return this;
  }

  show() {
    if (this._strikethrough && this._winnerCombination !== null)
      this.box?.children[this.getChildren(this._winnerCombination)].appendChild(
        this._strikethrough
      );
  }

  private saveWinnerCombination(value: number) {
    this._winnerCombination = value;
  }

  private createStrikethrouth() {
    this._strikethrough = document.createElement("div");
    this._strikethrough.setAttribute("id", "strikethrough");
    this.addClass();
  }

  private getChildren(winnerCombination: number) {
    return this.places[winnerCombination].cellPlace;
  }

  private addClass() {
    if (this._winnerCombination !== null)
      this._strikethrough?.setAttribute(
        "class",
        this.places[this._winnerCombination].class
      );
  }

  remove() {
    this._strikethrough?.classList.remove("show");
    this._strikethrough?.classList.add("hide");
    setTimeout(() => {
      this._strikethrough?.remove();
    }, 500);
  }
}
