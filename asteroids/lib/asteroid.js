(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function(options) {
    var superOptions = {
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      pos: options.pos,
      game: options.game,
      vel: window.Asteroids.Util.randomVec(11) // TODO change this?
    };

    window.Asteroids.MovingObject.call(this, superOptions);
  };

  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 20;

  window.Asteroids.Util.inherits(Asteroid, window.Asteroids.MovingObject);

})();
