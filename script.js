let container = document.querySelector(".container");
let containerSize = 16;

let colorSelector = document.querySelector("#colorSelector");
let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let sliderValue = document.querySelector(".sliderValue");
let slider = document.querySelector(".slider");

const percentage = 100;

function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        let cell = document.createElement("div");

        container.append(cell);
    };
}

function preSelectedButton() {
    colorBtn.focus();
}

createGrid(containerSize);