let gridSize = prompt("Enter grid size");
const containerDiv = document.querySelector('.grid-container');
// console.log(containerDiv);
let gridDiv;
function fillGrids()
{
    containerDiv.innerHTML = ''; // clears previous divs, if any
    for(let i = 0; i < gridSize*gridSize; i++)
    {
        gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');
        containerDiv.style.setProperty('--grid-rows', gridSize);
        containerDiv.style.setProperty('--grid-cols', gridSize);
        containerDiv.appendChild(gridDiv);
    }
}

fillGrids();
const gridSizeBtn = document.querySelector('.grid-size-button');
gridSizeBtn.addEventListener('click', () => {
    gridSize = prompt("Enter grid size");
    fillGrids();
})

containerDiv.addEventListener('mouseover', (e) => {
    const target = e.target;
    target.style.backgroundColor = 'black';
})