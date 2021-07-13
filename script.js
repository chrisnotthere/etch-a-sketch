const container = document.querySelector('.container');
const title = document.querySelector('.title');
const grid = document.querySelector('.grid');
const controls = document.querySelector('.controls');

const clearBtn = document.querySelector("#clear-btn").addEventListener("click", clearCells);
const gridSizeBtn = document.querySelector("#grid-btn").addEventListener("click", setGrid);
const blackHoverBtn = document.querySelector("#black-btn").addEventListener("click", setHoverBlack);
const rainbowHoverBtn = document.querySelector("#rainbow-btn").addEventListener("click", setHoverRainbow);
const greyScaleHoverBtn = document.querySelector("#grey-scale-btn").addEventListener("click", setHoverGreyScale);



//create default grid
makeGrid(16);


//make grid function
function makeGrid(size){

    clearGrid();

    grid.style.setProperty("--grid-cols", size);
    grid.style.setProperty("--grid-rows", size);

    for(i = 0; i < (size*size); i++ ){
        
        //create cell and add to grid
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell).className = "cell";

        //add listener to each cell
        cell.addEventListener("mouseover", hoverBlack);
    }

}


function clearGrid(){

    grid.innerHTML = "";

}





//// EVENT LISTENERS ////







//clear btn event
function clearCells(){

    const cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    });

}


//user set grid size
function setGrid(){

    const size = prompt("enter grid size", "4-64")
    
    if(size > 64 || size < 4){
        alert('valid range is 4-64')
        return;
    }
    
    makeGrid(size);

}

function setHoverBlack(){

    const cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.removeEventListener("mouseover", hoverRainbow);
        element.removeEventListener("mouseover", hoverGreyScale);

        element.addEventListener("mouseover", hoverBlack);
    });

}

function hoverBlack(e){
    
    e.target.style.setProperty("background-color", "#000000")
}


function setHoverRainbow(){

    const cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.removeEventListener("mouseover", hoverBlack);
        element.removeEventListener("mouseover", hoverGreyScale);

        element.addEventListener("mouseover", hoverRainbow);
    });

}

function hoverRainbow(e){
    
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    e.target.style.setProperty("background-color", randomColor)
}


function setHoverGreyScale(){

    const cells = document.querySelectorAll('.cell');
    

    cells.forEach(element => {
        element.removeEventListener("mouseover", hoverBlack);
        element.removeEventListener("mouseover", hoverRainbow);

        //custom attribute to help darken bgcolor
        element.setAttribute("data-red", "255");
        element.setAttribute("data-green", "255");
        element.setAttribute("data-blue", "255");

        element.addEventListener("mouseover", hoverGreyScale);
    });

}



function hoverGreyScale(e){

    let red = e.target.dataset.red;
    let green = e.target.dataset.green;
    let blue = e.target.dataset.blue;

    e.target.style.setProperty("background-color", `rgb(${red},${green},${blue})`);

    e.target.dataset.red -= 50;
    e.target.dataset.green -= 50;
    e.target.dataset.blue -= 50;

}


