function createSnakeGrid(rowNum, columnNum){
  let grid = [];
  for (let i=0; i<rowNum; i++) {
    grid.push([]);
  }
  let count = 1;
  let columnCount = 0;
  let goingDown = true;
  for (let i=0; i<columnNum; i++) {
    if (goingDown) {
      for (let j=0; j<rowNum;j++) {
        grid[j][columnCount] = count;
        count++
      }
    } else {
      for (let j=rowNum-1; j>=0;j--) {
        grid[j][columnCount] = count;
        count++
      }
    }
    columnCount++;
    goingDown = !goingDown;
  }
  return grid;
}

function renderGrid() {
  let canvas = document.getElementById('canvas');
  canvas.innerHTML = '';

  let rowNum = document.getElementById('row').value
  let columnNum = document.getElementById('column').value
  let snakeGrid = createSnakeGrid(rowNum, columnNum);

  for (let i=0; i<snakeGrid.length; i++) {
    let parentDiv = document.createElement("div");
    parentDiv.style.height = '56px'
    snakeGrid[i].forEach((element,index)=>{
      let newDiv = document.createElement("div");
      newDiv.innerHTML = element;
      newDiv.className = 'boxNum'
      parentDiv.appendChild(newDiv)
    })
    canvas.appendChild(parentDiv)
  }
}
