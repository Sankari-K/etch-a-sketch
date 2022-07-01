// creating the square grid
let containerDiv = document.querySelector('.container');
for(let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    containerDiv.appendChild(row);
    row.style.display = 'flex';
    for (let j = 0; j < 16; j++) {
        const node = document.createElement("div");
        node.style.backgroundColor = "red";
        node.classList.add('element');
        //node.style.margin = "1px";
        node.style.height = "20px";
        node.style.width = "20px";
        row.appendChild(node);
    }
}

let divs = document.querySelectorAll('.element');
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'blue';
    });
});
