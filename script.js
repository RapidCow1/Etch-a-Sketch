document.addEventListener('DOMContentLoaded', function() {
    updateGrid();
});

document.addEventListener('mouseup', () => isMouseDown = false);

document.getElementById('gridSize').addEventListener('input', function() {
    document.getElementById('gridSizeNumber').textContent = this.value;
    updateGrid();
});

let isMouseDown = false;
let isRainbowMose = false;

let currentColour = '#0000ff';

document.querySelector('#redBtn').addEventListener('click', function () {
    currentColour = '#ff0000';
})

document.querySelector('#greenBtn').addEventListener('click', function () {
    currentColour = '#00ff00';
})

document.querySelector('#blueBtn').addEventListener('click', function () {
    currentColour = '#0000ff';
})

document.querySelector('#eraserBtn').addEventListener('click', function () {
    currentColour = '#ffffff';
})

document.querySelector('#colourPicker').addEventListener('input', function() {
    currentColour = this.value;
});

document.querySelector('#randomColourBtn').addEventListener('click', function() {
    currentColour = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
});

function changeColour(square) {
    square.style.backgroundColor = currentColour;
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
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
        square.addEventListener('mousedown', () => {
            isMouseDown = true;
            changeColour(square);
        });
        square.addEventListener('mousemove', () => {
            if (isMouseDown) {
                changeColour(square);
            }
        })
        square.addEventListener('dragstart', (e) => e.preventDefault())

        
        container.appendChild(square);
    }
}
