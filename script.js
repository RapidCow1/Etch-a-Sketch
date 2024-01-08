document.addEventListener('DOMContentLoaded', function() {
    updateGrid();
});

document.addEventListener('mouseup', () => isMouseDown = false);

document.getElementById('gridSize').addEventListener('input', function() {
    document.getElementById('gridSizeNumber').textContent = this.value;
    updateGrid();
});

let isMouseDown = false;
let isRainbowMode = false;

let currentColour = '#0000ff';

document.querySelector('#redBtn').addEventListener('click', function () {
    currentColour = '#ff0000';
    isRainbowMode = false;
})

document.querySelector('#greenBtn').addEventListener('click', function () {
    currentColour = '#00ff00';
    isRainbowMode = false;
})

document.querySelector('#blueBtn').addEventListener('click', function () {
    currentColour = '#0000ff';
    isRainbowMode = false;
})

document.querySelector('#eraserBtn').addEventListener('click', function () {
    currentColour = '#ffffff';
    isRainbowMode = false;
})

document.querySelector('#colourPicker').addEventListener('input', function() {
    currentColour = this.value;
});

document.querySelector('#randomColourBtn').addEventListener('click', function() {
    ranomiseGrid()
});

document.querySelector('#rainbowModeBtn').addEventListener('click', function() {
    isRainbowMode = !isRainbowMode;
});

function randomHexGen() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

function changeColour(square) {
    if (isRainbowMode) currentColour = randomHexGen();
    square.style.backgroundColor = currentColour;
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

function ranomiseGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = randomHexGen();
    });
}

function updateGrid() {
    const gridSize = parseInt(document.getElementById('gridSize').value) || 10;
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; 
    container.style.setProperty('--grid-size', gridSize); 

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.isColoured = false; 

        square.addEventListener('mousedown', () => {
            isMouseDown = true;
            if (!square.isColoured) {
                changeColour(square);
                square.isColored = true;
            }
        });

        square.addEventListener('mousemove', () => {
            if (isMouseDown && !square.isColoured) {
                changeColour(square);
                square.isColoured = true;
            }
        });

        square.addEventListener('mouseleave', () => {
            square.isColoured = false; 
        });

        square.addEventListener('mouseup', () => {
            square.isColored = false; 
        });

        square.addEventListener('dragstart', (e) => e.preventDefault());

        container.appendChild(square);
    }
}

