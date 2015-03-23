// var options = {
//   pos: [50,50],
//   radius: 10,
//   color: 'red'
// };
// mov.draw(ctx);

// var mov = new window.Asteroids.MovingObject(options);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var asteroid = new window.Asteroids.Asteroid({pos: [50,50]});


var game = new window.Asteroids.Game();
// game.draw(ctx);

var gameView = new window.Asteroids.GameView(game, ctx);
gameView.start();
// gameView.stop();

// var timer = window.setInterval(function() {
//   game.moveObjects();
//   game.draw(ctx);
// }, 10);
//
// clearInterval(timer);
