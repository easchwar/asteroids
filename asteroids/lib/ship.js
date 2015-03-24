(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Ship = window.Asteroids.Ship = function (options) {
    var superOptions = {
      color: Ship.COLOR,
      radius: Ship.RADIUS,
      vel: [0, 0],
      pos: options.game.randomPosition(),
      game: options.game
    };

    window.Asteroids.MovingObject.call(this, superOptions);
  };


  window.Asteroids.Util.inherits(Ship, window.Asteroids.MovingObject);

  Ship.RADIUS = 5;
  Ship.COLOR = '#FFFFFF';

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    this.game.add(new window.Asteroids.Bullet(this));
  };

})();
