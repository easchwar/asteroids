(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function(options) {
    var superOptions = {
      color: Asteroid.COLORS[Math.floor(Math.random() * Asteroid.COLORS.length)],
      radius: Asteroid.RADIUS,
      pos: options.pos,
      game: options.game,
      vel: window.Asteroids.Util.randomVec(Math.random() * 10) // TODO change this?
    };

    window.Asteroids.MovingObject.call(this, superOptions);
  };

  Asteroid.COLORS = ['red','orange','green', 'yellowgreen', 'cornflowerblue'];
  Asteroid.RADIUS = 20;

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof window.Asteroids.Ship) {
      otherObject.relocate();
    }
  };


})();
