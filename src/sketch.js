function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
}

function bg_1 () {
  let grid_width = window.innerWidth / 20;
  let grid_height = window.innerHeight / 10;
  let width = 0;
  let height = 0;
  for(let x = 0; x < window.innerWidth; x += grid_width){
    for(let y = 0; y < window.innerHeight; y += grid_height){
      //line(x, y, x + grid_width, y);
      //line(x, y, x, y + grid_height);
      let chance = Math.random() * 10;
      if(chance >= 7){
        ellipseMode(CORNER);
        let widthspace = (grid_width * .1);
        let heightspace = (grid_height * .1);
        ellipse(x + (widthspace/2), y + (widthspace/2), grid_width - widthspace, grid_height - heightspace);
      }
    }
  }
}

function draw() {
  background("#e2e2e2");
  bg_1();
}

function mouseClicked(){
  draw();
}