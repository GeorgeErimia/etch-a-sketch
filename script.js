const container = document.querySelector('.container');
const gridSize = 16;

// Create a 16x16 grid of square divs
for(let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div')
    div.classList.add('square');
    div.classList.add(`square${i}`);
    div.style.width = `${100 * (1/gridSize)}%`;
    div.style.height= `${100 * (1/gridSize)}%`;
    // div.textContent = i;
    container.appendChild(div);

    // console.log("WIDTH: " + window.innerWidth)
    // console.log("HEIGHT: " + window.innerHeight)

    // Set the 'hover' effect of the div to change color whenever mouse passes over it 
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
    })
}

