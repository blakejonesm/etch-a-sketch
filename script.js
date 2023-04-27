const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let containerSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode
}

let container = document.querySelector("#container");
let colorSelector = document.querySelector("#colorSelector");
let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let sliderValue = document.querySelector("#sliderValue");
let slider = document.querySelector("#slider");

colorSelector.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadContainer()

const percentage = 100;

function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `calc(${percentage}% / ${size})`;
        cell.style.width = `calc(${percentage}% / ${size})`;
        cell.style.backgroundColor = "#FFFFFF";
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)

        container.append(cell);
    };
};

function changeColor(e) {
    if (currentMode === 'rainbow') {
        const randomRed = Math.floor(Math.random() * 256)
        const randomGreen = Math.floor(Math.random() * 256)
        const randomBlue = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#ffffff'
    }
}

function changeContainerSize(size) {
    clearContainer();
    createGrid(size);
};

function reloadContainer() {
    clearContainer();
    createGrid(containerSize);
}

function clearContainer() {
    container.innerHTML = ''
}

function updateSliderValue() {
    sliderValue.innerText = `${slider.value} x ${slider.value}`;
};

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}

addGlobalEventListener("change", "#slider", e => {
    updateSliderValue(e.target.value)
    changeContainerSize(e.target.value)
  });


window.onload = () => {
    createGrid(containerSize);
};
