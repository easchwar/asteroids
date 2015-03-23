(function () {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 400;
  Game.NUM_ASTEROIDS = 2;

  Game.prototype.addAsteroids = function() {
    var result = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      result.push(new window.Asteroids.Asteroid({pos: this.randomPosition()}));
    }
    return result;
  };

  Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * Game.DIM_X);
    var y = Math.floor(Math.random() * Game.DIM_Y);
    return [x, y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };
})();
