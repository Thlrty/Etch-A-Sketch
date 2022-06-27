const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';

const grid = document.getElementById('grid');
const colorBtn = document.getElementById('color');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const resetBtn = document.getElementById('reset')

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    grid.appendChild(gridElement)
  }
}

setupGrid(16);