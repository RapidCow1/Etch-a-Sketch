document.addEventListener('DOMContentLoaded', function() {
    updateGrid();
});

document.addEventListener('mouseup', () => isMouseDown = false);


let isMouseDown = false;

function changeColour(square) {
    square.style.backgroundColor = 'blue';
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

        
        container.appendChild(square);
    }
}
