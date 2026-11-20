
console.log("test!")

//Create const for query selector "container"
//create const for div element creation.
const container = document.querySelector("#container");
const existingDiv = document.querySelector("div")


//create function for grid creation with grid height and width parameters.
// sum height and width to total number of divs
//loop based on the sum amount
    //new const (within loop) for creating div element
    //set id of new div to grid and loop number.
    //append new create div const to container
//console log out side of loop to confirm done.
function gridCreate(gridHeight, gridWidth) {
    let sum = gridHeight * gridWidth;
    for(let i = 1; i <= sum; i++) {
    const etchDiv = document.createElement("div");
    etchDiv.id = `grid ${i}`;
    container.append(etchDiv);
    }
console.log(`done grid of ${gridHeight} by ${gridWidth}`)
};

//run grid creation command
gridCreate(16, 16)
