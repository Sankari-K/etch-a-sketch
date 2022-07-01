// creating the square grid
let containerDiv = document.querySelector('.container');
const LENGTH = 600;
containerDiv.style.height = `${LENGTH}px`;
containerDiv.style.width = `${LENGTH}px`;

let canvasColor = "#3caea3";
let dimensions = 16;
createGrid();
hover();

let submit = document.querySelector('button.btn.a');
submit.addEventListener('click', () => {
    // Erase previous grid if exists
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
      }
    // Create new grid
    dimensions = document.querySelector('input#size').value;
    createGrid();
    // Hover over the cells
   hover(); 
});

// Color picker functionality
colorPicker = document.querySelector('.color-picker input');
colorPicker.addEventListener('input', function() {
    canvasColor = colorPicker.value;
})

// Erasor functionality
erasor = document.querySelector('.btn.b');
erasor.addEventListener('click', function() {
    canvasColor = "bisque";
})

// Clear functionality 
clear = document.querySelector('.btn.c');
clear.addEventListener('click', function() {
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
        div.style.backgroundColor = "bisque";
});
});


function createGrid() {
    console.log(dimensions);
    for(let i = 0; i < dimensions; i++) {
        let row = document.createElement("div");
        containerDiv.appendChild(row);
        row.style.display = 'flex';
        for (let j = 0; j < dimensions; j++) {

            const node = document.createElement("div");
            node.style.backgroundColor = "bisque";//"bisque"; /*IMP!*/
            node.classList.add('element');
            //node.style.borderStyle = "solid";
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