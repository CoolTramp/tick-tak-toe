type Figures = "chosen-circle" | "chosen-cross";

export class Figure {
  private currentFigure: Figures = "chosen-circle";

  private toggleFigure(): Figures {
    this.currentFigure =
      this.currentFigure === "chosen-circle" ? "chosen-cross" : "chosen-circle";

    return this.currentFigure;
  }

  private getFigure(): Figures {
    return this.currentFigure;
  }

  markFigureOnCell(cell: HTMLElement | null) {
    if (cell instanceof HTMLElement) {
      cell.classList.add(this.getFigure());
      this.toggleFigure();
    } else {
      console.error("Ошибка: элемент не является HTML-кнопкой.");
    }
  }

  showFigureOnCell(cell: HTMLElement | null) {
    if (cell instanceof HTMLElement && this.cellIsAvailable(cell)) {
      cell.classList.toggle(this.getFigure());
    }
  }

  private cellIsAvailable(cell: HTMLElement) {
    return !cell.className.includes("block");
  }
}
