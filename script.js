// creating the square grid
let containerDiv = document.querySelector('.container');
let canvasColor = "#3caea3";
let BACKGROUND = "#f9e5d7";
let dimensions = 16;

const LENGTH = 600;
containerDiv.style.height = `${LENGTH}px`;
containerDiv.style.width = `${LENGTH}px`;

createGrid();
hover();

// Adding grid using input
sizeChange = document.querySelector('input#size');
sizeChange.addEventListener("change", () => {
    // Erase previous grid if exists
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
      }
    // Create new grid
    dimensions = sizeChange.value;
    gridSize = document.querySelector('.grid-size');
    gridSize.innerText = `Grid size: ${dimensions} x ${dimensions} `;
    createGrid();
    // Hover over the cells
    hover(); 
})
// Make grid dimension dynamic 
sizeChange.addEventListener("input", () => { 
    gridSize = document.querySelector('.grid-size');
    gridSize.innerText = `Grid size: ${sizeChange.value} x ${sizeChange.value} `;
})

// Color picker functionality
colorPicker = document.querySelector('.color-picker input');
colorPicker.addEventListener('input', function() {
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
    div.removeEventListener('mouseover', excHover); });
    canvasColor = colorPicker.value;
})

// Erasor functionality
erasor = document.querySelector('.btn.b');
erasor.addEventListener('click', function() {
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
    div.removeEventListener('mouseover', excHover); });
    canvasColor = BACKGROUND;
})

// Clear functionality 
clear = document.querySelector('.btn.c');
clear.addEventListener('click', function() {
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
        div.style.backgroundColor = BACKGROUND;
});
});


// Grid lines functionality
gridLines = document.querySelector('.btn.e');
gridLines.addEventListener('click', function() {
    let divs = document.querySelectorAll('.element');
    //console.log(parseFloat(divs[0].style.height), (LENGTH - dimensions)/dimensions);

    // If there is a grid, remove it
    if ((LENGTH - dimensions)/dimensions - parseFloat(divs[0].style.height, 10) > -0.05) {
        //console.log("Code will remove grid");
        divs.forEach((div) => {
        div.style.height = `${LENGTH/dimensions}px`;
        div.style.width = `${LENGTH/dimensions}px`;
        div.style.margin = 0;
        })
    }
    // If there is no grid, add it
    else {
        //console.log("Code will add grid");
        divs.forEach((div) => {
            div.style.margin = "1px";
            div.style.height = `${(LENGTH - dimensions)/dimensions}px`;
            div.style.width = `${(LENGTH - dimensions)/dimensions}px`;
         }); 
         
         let head = document.querySelectorAll(".header");
         head.forEach((row) => {
             row.style.height = `${LENGTH/dimensions}px`;
         }) 
    }
    
})

// Random color functionality
random = document.querySelector('.btn.d');
random.addEventListener('click', randomColor);
function randomColor() {
    random.classList.add('on');
        let divs = document.querySelectorAll('.element');
        divs.forEach((div) => {
        div.addEventListener('mouseover', excHover);
    })
};

function excHover(evt) {
    evt.composedPath()[0].style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function createGrid() {
    for(let i = 0; i < dimensions; i++) {
        let row = document.createElement("div");
        containerDiv.appendChild(row);
        row.style.display = 'flex';
        row.classList.add("header");
        for (let j = 0; j < dimensions; j++) {
            const node = document.createElement("div");
            node.style.backgroundColor = BACKGROUND;
            node.classList.add('element');
            node.style.height = `${LENGTH/dimensions}px`;
            node.style.width = `${LENGTH/dimensions}px`;
            row.appendChild(node);
        }
    }
}

function hover() {
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
            div.style.backgroundColor = canvasColor;
    });
})}; 

