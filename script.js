// creating the square grid
let containerDiv = document.querySelector('.container');
const LENGTH = 600;
containerDiv.style.height = "600px";
containerDiv.style.width = "600px";

let submit = document.querySelector('button');
 
let dimensions;
submit.addEventListener('click', () => {
    // Erase previous grid if exists
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.lastChild);
      }
    // Create new grid
    dimensions = document.querySelector('input').value;
    console.log(dimensions);
    for(let i = 0; i < dimensions; i++) {
        let row = document.createElement("div");
        containerDiv.appendChild(row);
        row.style.display = 'flex';
        for (let j = 0; j < dimensions; j++) {

            const node = document.createElement("div");
            node.style.backgroundColor = "#3caea3";
            node.classList.add('element');
            //node.style.margin = "1px";
            node.style.height = `${LENGTH/dimensions}px`;
            node.style.width = `${LENGTH/dimensions}px`;
            row.appendChild(node);
        }
    }
    // Hover over the cells
    let divs = document.querySelectorAll('.element');
    divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'bisque';
    });
});

})

