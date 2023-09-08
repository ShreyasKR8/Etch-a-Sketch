let gridDiv;
let mouseDown = false;
let isRandomRGB = false;
let chosenColor = 'rgb(0, 0, 0)';
const containerDiv = document.querySelector('.grid-container');
const gridSizeBtn = document.querySelector('.grid-size-button');
const randomColorBtn = document.querySelector('.random-rgb-button');
const toggleGridBtn = document.querySelector('.toggle-grid-button');
const clearBtn = document.querySelector('.clear-button');

function fillGrids(gridSize = 16)
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

function applyColorOnClick(e)
{
    if(e.type === 'mouseover' && !mouseDown)
    {
        return;
    }
    const target = e.target;
    target.style.backgroundColor = chosenColor; 
}

function applyColorOnHover(e)
{
    if(isRandomRGB)
    {
        setRandomColor();
    }
    const target = e.target;
    target.style.backgroundColor = chosenColor; 
}

function setRandomColor()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    chosenColor = `rgb(${r}, ${g}, ${b})`;
}

function toggleGridLines(gridLines)
{
    containerDiv.classList.toggle('remove-grid-border');
    
    containerDiv.childNodes.forEach(gridDiv => {
        gridDiv.classList.toggle('remove-grid-border');
    });
}

function clearGrid()
{
    containerDiv.childNodes.forEach(gridDiv => {
        gridDiv.style.backgroundColor = 'white'
    });
}

fillGrids();

gridSizeBtn.addEventListener('click', () => {
    do{
        var gridSize = prompt("Enter the grid size");
    }while(gridSize > 100 || gridSize <= 0);
    fillGrids(gridSize);
});

// containerDiv.addEventListener('mouseover', applyColorOnClick);
// containerDiv.addEventListener('mousedown', applyColorOnClick);
containerDiv.addEventListener('mouseover', applyColorOnHover);

document.body.onmousedown =  () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

randomColorBtn.addEventListener('click', () => {
    if(!isRandomRGB)
    {
        isRandomRGB = true;
        randomColorBtn.textContent = 'Black Color';
    }
    else 
    {
        isRandomRGB = false;
        chosenColor = 'rgb(0, 0, 0)';
        randomColorBtn.textContent = 'Random RGB';
    }
});

toggleGridBtn.addEventListener('click', toggleGridLines);

clearBtn.addEventListener('click', clearGrid);
