
const gridContainer = document.getElementById('grid-container');

// Function to add event listeners to each square
function applyEvents(){
	const squares = document.querySelectorAll('.square');

	squares.forEach(square => {
		// when mouse enters the div, add "hovered" class to it
		square.addEventListener('mouseenter', () => {
			square.classList.add('hovered');
		});
		/* square.addEventListener('mouseleave', () => {
			square.classList.remove('hovered');
		}); */
});
}

// function to createGrid based on Button clicked
function createGrid(size) {
	// Remove existing squares
	while (gridContainer.firstChild)
	{
		gridContainer.removeChild(gridContainer.firstChild);
	}
	let i = 0;
	// Create the squares and add them to the container
	while (i < size * size)
	{
		const square = document.createElement('div');
		square.classList.add('square');
		square.style.width = `calc(100% / ${size})`;
		square.style.height = `calc(100% / ${size})`;
		square.style.boxSizing = "border-box";
		gridContainer.appendChild(square);
		i++;
	}
	applyEvents();
	activateClear();
}

//function to activate clear button
function activateClear(){
	// store all grid squares in gridSquares
	const gridSquares = document.querySelectorAll('.square');
	// select board-clear button and store it in clearButton
	const clearButton = document.getElementById('clear-button');
	// add a click event listener
	// inside the function, loop through all grid squares removing the hovered class
	clearButton.addEventListener('click', function() {
		gridSquares.forEach(square => {
		square.classList.remove('hovered');
	  });
	});
}
