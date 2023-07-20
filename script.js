document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("gridContainer");
    const newGridButton = document.getElementById("newGridButton");

    function createGrid(size) {
        // Clear the existing grid
        gridContainer.innerHTML = "";

        // Calculate the width of each square based on the container width (300px)
        const squareSize = 300 / size;

        // Create the new grid
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;
                gridContainer.appendChild(square);
            }
        }
    }

    // Initialize the grid with a default size of 16x16
    createGrid(16);

    // Add event listener to the button to trigger the new grid creation
    newGridButton.addEventListener("click", () => {
        let gridSize = prompt("Enter the number of squares per side (max: 100):");
        gridSize = parseInt(gridSize);

        if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
            alert("Invalid input. Please enter a number between 1 and 100.");
            return;
        }

        createGrid(gridSize);
    });
});
