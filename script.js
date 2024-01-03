document.addEventListener('DOMContentLoaded', function() {
    updateGrid();
});

function changeColour() {
    event.target.style.backgroundColor = 'blue';
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

function updateGrid() {
    const gridSize = parseInt(document.getElementById('gridSize').value) || 5;
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; 
    container.style.setProperty('--grid-size', gridSize); 

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColour);
        //square.onclick = changeColour;
        container.appendChild(square);
    }
}
