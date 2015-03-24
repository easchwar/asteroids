(function () {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Bullet = window.Asteroids.Bullet = function(ship) {
    var velocity = ship.vel;
    if (velocity[0] === 0 && velocity[1] === 0) {
      velocity = [10, 0];
    } else {
      velocity = [ship.vel[0] * 1.5, ship.vel[1] * 1.5];
    }
    var superOptions = {
      color: Bullet.COLOR,
      radius: Bullet.RADIUS,
      vel: velocity,
      pos: ship.pos,
      game: ship.game
    };
    window.Asteroids.MovingObject.call(this, superOptions);
  };

  Bullet.RADIUS = 2;
  Bullet.COLOR = 'white';

  window.Asteroids.Util.inherits(Bullet, window.Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof window.Asteroids.Asteroid) {
      this.game.remove(otherObj);
    }
  };

  Bullet.prototype.isWrappable = false;
})();
