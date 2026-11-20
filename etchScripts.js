
console.log("test!")

//Create const for query selector "container"
//create const for div element creation.
const container = document.querySelector("#container");
const etchDiv = document.createElement("div");


// Create function for creating a div within container div. (grid size to come later with Loops)
// console log to confirm function run

function gridCreate(gridSize) {
    container.append(etchDiv);
    etchDiv.setAttribute("id" , "grid 1"); 
    let sum = gridSize * gridSize;
    console.log(`done grid of ${gridSize} by ${gridSize}`)
};

gridCreate(16)
