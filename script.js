let simulationInterval // Global var that stores interval ID
let running = false; // Flag to show when game is running or paused.

// Start simulation
function startSimulation() {
    if(!running) {
        // Start the timer. 1000 ms = 1 second
        simulationInterval = setInterval(updateSimulation, 1000); // Runs the update sim every second
        running = true;
        console.log("Simulation Started");
    }
}

// Stop simulation
function stopSimulation() {
    clearInterval(simulationInterval);
    running = false;
    console.log("Simulation pause");
}

// Function to update simulation
function updateSimulation() {
    updateAntPositions();
    decreaseFoodAndWater();
    updateTemperature();
    console.log('Simulation updated');
}

function updateAntPositions() {
    console.log("Ant positions updated");
}

function decreaseFoodAndWater() {
    let foodSlider = document.getElementById('food-amount');
    let waterSlider = document.getElementById('water-amount');

    // Decrease food due to ant consumption
    if(foodSlider.value > 0) {
        foodSlider.value -= 1;
    }

    // Decrease water due to ant consumption
    if(waterSlider.value > 0) {
        waterSlider.value -= 1;
    }

    console.log("Food variables updated");
}

function updateTemperature() {
    let tempSlider = document.getElementById('temp');
    tempSlider.value -= 1;

    console.log("Temperature updated");
}

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