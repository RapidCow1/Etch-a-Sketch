document.addEventListener('DOMContentLoaded', function() {
    updateGrid();
});

document.addEventListener('mouseup', () => isMouseDown = false);

document.getElementById('gridSize').addEventListener('input', function() {
    document.getElementById('gridSizeNumber').textContent = this.value;
    updateGrid();
});

let isMouseDown = false;

function changeColour(square) {
    const selectColour = document.querySelector('#colourPicker').value;
    square.style.backgroundColor = selectColour;
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
            if (isMouseDown) changeColour(square);
        })
        square.addEventListener('dragstart', (e) => e.preventDefault())

        
        container.appendChild(square);
    }
}
