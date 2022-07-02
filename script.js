// creating the square grid
let containerDiv = document.querySelector('.container');
const LENGTH = 600;
containerDiv.style.height = `${LENGTH}px`;
containerDiv.style.width = `${LENGTH}px`;

let canvasColor = "#3caea3";
let BACKGROUND = "#f9e5d7";

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
    console.log('huhuh');
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
    console.log('hey');
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
       div.style.margin = "1px";
       div.style.height = `${(LENGTH - dimensions)/dimensions}px`;
       div.style.width = `${(LENGTH - dimensions)/dimensions}px`;
    });

    let head = document.querySelectorAll(".header");
    head.forEach((row) => {
        row.style.height = `${LENGTH/dimensions}px`;
    })
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
    console.log(evt.path[0]);
    evt.path[0].style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function createGrid() {
    console.log(dimensions);
    for(let i = 0; i < dimensions; i++) {
        let row = document.createElement("div");
        containerDiv.appendChild(row);
        row.style.display = 'flex';
        row.classList.add("header");
        for (let j = 0; j < dimensions; j++) {

            const node = document.createElement("div");
            node.style.backgroundColor = BACKGROUND;//"bisque"; /*IMP!*/
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



// div.removeEventListener('mouseover', excHover);