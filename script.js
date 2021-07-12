const container = document.querySelector('.container');
const title = document.querySelector('.title');
const grid = document.querySelector('.grid');
const controls = document.querySelector('.controls');
const clearBtn = document.querySelector("#clear").addEventListener("click", clearCells);
const gridSizeBtn = document.querySelector("#grid-size").addEventListener("click", setGrid);


title.innerHTML = "<h1>Etch-A-Sketch</h1>";

//create default grid
makeGrid(12);


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
        cell.addEventListener("mouseover", hover);
    }

}


function clearGrid(){

    grid.innerHTML = "";

}





//// EVENT LISTENERS ////

//cell hover event
function hover(e){
    
    e.target.style.setProperty("background-color", "black")
}



//clear btn event
function clearCells(){

    const cells = document.querySelectorAll('.cell');

    cells.forEach(element => {
        element.style.backgroundColor = 'white';
    });

}


//user set grid size
function setGrid(){

    const size = prompt("enter grid size", "4-100")
    
    if(size > 100 || size < 4){
        alert('valid range is 4-100')
        return;
    }
    
    makeGrid(size);

}