const container = document.querySelector('.container');
const button = document.querySelector('.btn-resize');
const body = document.querySelector('body');

function createGame(gridSize) {
    // reset grid container
    container.innerHTML = "";

    // Create a gridSize x gridSize of square divs
    for(let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        div.classList.add(`square${i}`);
        div.style.width = `${100 * (1/gridSize)}%`;
        div.style.height= `${100 * (1/gridSize)}%`;
        div.style.opacity = 0.0;
    
        // Set the 'hover' effect of the div to change color whenever mouse passes over it 
        div.addEventListener('mouseover', () => {
            if(parseInt(div.style.opacity) < 1) {
                div.style.opacity = parseFloat(div.style.opacity) + 0.1;
            }
        })
    
        // div.textContent = i;
        container.appendChild(div);
    
        // console.log("WIDTH: " + window.innerWidth)
        // console.log("HEIGHT: " + window.innerHeight)
    }
}

createGame(16);

function changeGridSize() {
    const newGridSize = prompt('Insert new grid size');
    const newGridSizeValue = parseInt(newGridSize);
    if(newGridSizeValue > 100) {
        alert('A maximum value of 100 is required')
    } else {
        createGame(newGridSizeValue)
    }
}

button.addEventListener('click', changeGridSize)






