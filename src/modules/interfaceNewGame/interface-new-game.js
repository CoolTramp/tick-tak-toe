"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showNewBox = showNewBox;
var box = document.getElementById("box");
function showNewBox() {
    if (box) {
        box.style.display = "grid";
    }
}
