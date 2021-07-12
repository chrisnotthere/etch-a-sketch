const container = document.querySelector('.container');
const title = document.querySelector('.title');
const grid = document.querySelector('.grid');
const controls = document.querySelector('.controls');

title.innerHTML = "<h1>Etch-A-Sketch</h1>";
grid.innerHTML = "this is the grid div";
controls.innerHTML = "<button>submit</button><button>submit</button><button>submit</button>";

//create 16x16 grid
let cell = document.createElement("div");
//cell.setAttribute("class", "cell");
grid.appendChild(cell).className = "cell";
