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
      var options = {
        pos: this.randomPosition(),
        game: this
      };
      result.push(new window.Asteroids.Asteroid(options));
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

  Game.prototype.wrap = function(pos) {
    pos[0] = pos[0] > Game.DIM_X ? pos[0] - Game.DIM_X : pos[0];
    pos[0] = pos[0] < 0          ? pos[0] + Game.DIM_X : pos[0];
    pos[1] = pos[1] > Game.DIM_Y ? pos[1] - Game.DIM_Y : pos[1];
    pos[1] = pos[1] < 0          ? pos[1] + Game.DIM_Y : pos[1];
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length - 1; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          alert('COLLISION');
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    var asteroidIndex = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(asteroidIndex, 1);
  };

})();
