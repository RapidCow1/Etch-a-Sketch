document.addEventListener('DOMContentLoaded', function() {
    updateGrid();
});

function updateGrid() {
    const gridSize = parseInt(document.getElementById('gridSize').value) || 5;
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; 
    container.style.setProperty('--grid-size', gridSize); 

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}
