(function () {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Game = window.Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
    this.ship = new window.Asteroids.Ship({game: this});
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
    this.allObjects().forEach(function(obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(obj) {
      obj.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    pos[0] = pos[0] > Game.DIM_X ? pos[0] - Game.DIM_X : pos[0];
    pos[0] = pos[0] < 0          ? pos[0] + Game.DIM_X : pos[0];
    pos[1] = pos[1] > Game.DIM_Y ? pos[1] - Game.DIM_Y : pos[1];
    pos[1] = pos[1] < 0          ? pos[1] + Game.DIM_Y : pos[1];
  };

  Game.prototype.checkCollisions = function() {
    var objects = this.allObjects();
    for (var i = 0; i < objects.length - 1; i++) {
      for (var j = i + 1; j < objects.length; j++) {
        if (objects[i].isCollidedWith(objects[j])) {
          // alert('COLLISION');
          objects[i].collideWith(objects[j]);
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

  Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]);
  };

})();
