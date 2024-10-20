// Function to increase slider value
function increaseValue(id) {
    const slider = document.getElementById(id);
    const currentValue = Number(slider.value);
    const maxValue = Number(slider.max);

    if (currentValue < maxValue) {
        slider.value = currentValue + 5;
    }
}

// Function to decrease slider value
function decreaseValue(id) {
    const slider = document.getElementById(id);
    const currentValue = Number(slider.value);
    const minValue = Number(slider.min);

    if (currentValue > minValue) {
        slider.value = currentValue - 5;
    }
}

function createGrid(rows, cols) {
    const container = document.getElementById('grid-container');

    // Clear any existing grid items
    container.innerHTML = '';

    // Loop to create and color the grid:
    for(let row = 0; row < 20; row++) {
        for(let col = 0; col < 20; col++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item');


            // Apply color for the food region
            if (row < 4 && col < 6) {
                cell.classList.add('food-zone');  // Color for the food zone
            }

            // Apply color for the water region
            if (row < 4 && col >= 6 && col <= 11) {
                cell.classList.add('water-zone');  // Color for the food zone
            }

            // Apply color for the waste region
            if (row < 4 && col > 13) {
                cell.classList.add('waste-zone');  // Color for the food zone
            }

            // Apply color for the waste region
            if (row > 15) {
                cell.classList.add('base-zone');  // Color for the food zone
            }
            container.appendChild(cell);
        }
    }
}

// Create a 10x10 grid
createGrid(20, 20);