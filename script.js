const container = document.getElementById("container");
const button = document.querySelector(".Button")
//Remove Nodes for GridSize Function to Reset It and prevent overflow
function RemoveNodes(){
    let RemoveNode = document.getElementById("container");
    while(RemoveNode.firstChild){
        RemoveNode.firstChild.remove();
    }
}
//Create Reset Button
function GridSize(){
button.addEventListener("click", ()=>{
    RemoveNodes();
    let otherSize=window.prompt("How Big?");
    createGrid(otherSize);
    RandomColor();
})
}
//Create a default Grid
function createGrid(gridSize) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  for (i = 0; i < (gridSize * gridSize); i++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
};
};
//Color gridCells a random color  while hovering over
function RandomColor(){
    let HoverEffect = document.querySelectorAll(".grid-item");
    for(let i=0; i < HoverEffect.length; i++){
        let square = HoverEffect[i];
        square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = someColor();
        
        })
    }
}
//Reset Button For Grid
createGrid(16);
RandomColor();
GridSize();

//Generate Random Color
function someColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}