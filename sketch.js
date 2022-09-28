var gamestate,playercount,game,player, form


function setup() {
  createCanvas(800,400);
  db = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background("black");  
  if (playercount === 2){
    game.updateState(1)
  }
  
}
