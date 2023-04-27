let container = document.querySelector("#container");
let containerSize = 16;

let colorSelector = document.querySelector("#colorSelector");
let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let sliderValue = document.querySelector("#sliderValue");
let slider = document.querySelector("#slider");

const percentage = 100;

function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `calc(${percentage}% / ${size})`;
        cell.style.width = `calc(${percentage}% / ${size})`;
        cell.style.backgroundColor = "white";

        container.append(cell);
    };
};

function updateContainerSize(size) {
    container.innerHTML = '';
    createGrid(size);
};

function updateSliderValue() {
    sliderValue.innerText = `${slider.value} x ${slider.value}`;
};

function preSelectedButton() {
    colorBtn.focus();
    
    addGlobalEventListener("mousedown", ".cell", e => {
        colorBtn.focus();
        e.target.style.background = colorSelector.value;
    });
};

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}

addGlobalEventListener("change", "#slider", e => {
    updateSliderValue(e.target.value)
    updateContainerSize(e.target.value)
  });

window.onload = () => {
    createGrid(containerSize);
    preSelectedButton()
};
