
console.log("test!")

//Create const for query selector "container"
//create const for div element creation.
const container = document.querySelector("#container");
const existingDiv = document.querySelector("div")


//create function for grid creation with grid height and width parameters.
// sum height and width to total number of divs
function gridCreate(gridHeight, gridWidth) {

    //loop based on the sum amount
    //new const (within loop) for creating div element
    //set id of new div to grid and loop number.
    //append new create div const to container
    let sum = gridHeight * gridWidth;
    for(let i = 1; i <= sum; i++) {
    const etchDiv = document.createElement("div");
    etchDiv.id = `grid${i}`;
    etchDiv.classList = "grid"
    container.append(etchDiv);
    
    // new 'cell' const for new divs to allow styling.
    // background colour set to grey, div width set and height set, border to illustrate cell edge.
    const cell = document.querySelector(`#grid${i}`);
    cell.style.backgroundColor = "grey";
    cell.style.width = "10px";
    cell.style.height = "10px";
    cell.style.border = "1px, solid, black"    
    }

//console log out side of loop to confirm done.
console.log(`done grid of ${gridHeight} by ${gridWidth}`)
};

//run grid creation command
gridCreate(16, 16)


