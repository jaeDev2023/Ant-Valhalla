function testFunction() {
    console.log("Button has been clicked, dogg.");
}

function createGrid(rows, cols) {
    const container = document.getElementById('grid-container');

    // Clear any existing grid items
    container.innerHTML = '';

    // Loop to create the grid
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
    }
}

// Create a 10x10 grid
createGrid(20, 20);
