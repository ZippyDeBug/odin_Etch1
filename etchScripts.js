
console.log("test!");

// Create const for query selector "container"
// create const for container width
const container = document.querySelector("#container");
const containerWidth = container.clientWidth;


//create function for grid creation with gridXY, assuming always square

function gridCreate(gridXY) {

    // sum gridXY by itself to total number of divs
    // Calculate cell width
    const sum = gridXY * gridXY;
    const cellWidth = (containerWidth/gridXY);

    //loop based on the sum amount
    //new const (within loop) for creating div element
    //set id of new div to grid and loop number
    // add class to divs grid
    // specify cell width and height
    //append new create div const to container
    for(let i = 1; i <= sum; i++) {
        const etchDiv = document.createElement("div");
        etchDiv.id = `grid${i}`;
        etchDiv.classList.add("grid");
        etchDiv.style.width = `${cellWidth}px`;
        etchDiv.style.height = `${cellWidth}px`;  
        container.append(etchDiv);  
    }
    
//console log out side of loop to confirm done.
console.log(`done grid of ${gridXY} by ${gridXY}`);

};

//run grid creation command
gridCreate(16);


