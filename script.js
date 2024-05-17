const container = document.querySelector('.container');

// Create a 16x16 grid of square divs
for(let i = 0; i < 16; i++) {
    const div = document.createElement('div')
    div.classList.add('square');
    div.classList.add(`square${i}`);
    div.textContent = i;
    container.appendChild(div);

    // console.log("WIDTH: " + window.innerWidth)
    // console.log("HEIGHT: " + window.innerHeight)
}