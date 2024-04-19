const container = document.querySelector('.container');
let isDrawing = false;

function createGrid(numSquaresPerSide) {
    // Remove existing squares
    container.innerHTML = '';

    // Create new squares
    for (let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Set container width based on number of squares per side
    container.style.width = `${numSquaresPerSide * (960 / 16)}px`;

    // Add event listeners for drawing
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            isDrawing = true;
            square.style.backgroundColor = 'black';
        });
        square.addEventListener('mouseenter', () => {
            if (isDrawing) {
                square.style.backgroundColor = 'black';
            }
        });
        square.addEventListener('mouseup', () => {
            isDrawing = false;
        });
    });
}



function createNewGrid() {
    let numSquaresPerSide = prompt("Enter number of squares per side (max 100):");

    // Validate input
    numSquaresPerSide = parseInt(numSquaresPerSide);
    if (isNaN(numSquaresPerSide) || numSquaresPerSide <= 0 || numSquaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(numSquaresPerSide);
}

// Initial grid creation
createGrid(16);