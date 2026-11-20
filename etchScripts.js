
console.log("test!");

//  const for query selector "screen"
//  const for screen width
const screen = document.querySelector("#screen");
const screenWidth = screen.clientWidth;




function getRandomRgb() {
  const num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

//  const for color of the "sketch" trail
const hoverColor = getRandomRgb()

//grid creation with gridXY, assuming always square
function gridCreate(gridXY) {

    // sum gridXY by itself to total number of divs
    // Calculate cell width
    // clear children in case multiple calls of function
    const sum = gridXY * gridXY;
    const cellWidth = (screenWidth/gridXY);
    screen.replaceChildren()

    //loop based on the sum amount
    //new const (within loop) for creating div element
    //set id of new div to grid and loop number
    // add class to divs grid
    // specify cell width and height
    //add event listener to each cell div to change color when hovered.
    //append new create div const to screen
    for(let i = 1; i <= sum; i++) {
        const etchDiv = document.createElement("div");
        etchDiv.id = `grid${i}`;
        etchDiv.classList.add("grid");
        etchDiv.style.width = `${cellWidth}px`;
        etchDiv.style.height = `${cellWidth}px`; 
        etchDiv.addEventListener("mouseover", ()=>{ 
            if (etchDiv.style.backgroundColor === "") {
                etchDiv.style.backgroundColor = `${getRandomRgb()}`;
                };
            {etchDiv.style.opacity -= `-.2`;
            }
        });
        screen.append(etchDiv);  
    }
    
//console log out side of loop to confirm done.
console.log(`done grid of ${gridXY} by ${gridXY}`);
};

//run grid creation command
gridCreate(16);

// query selector to detect the restart button
//event listener for the restart buttons
const btnRestart = document.querySelector("#restart")
btnRestart.addEventListener("click", restart)

//function to prompt for cell count and recreate the grid with the chosen amount.
function restart() {
    let cells = parseInt(prompt("How many squares per side do you want? (max 100)"));
        if (cells > 100) {
            alert(`Error! 
            max of 100`);
            restart();
        }
        else if (cells > 0) {
            gridCreate(cells);             
        }
}