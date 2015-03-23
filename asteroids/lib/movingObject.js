(function () {

  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.isWrappable) {
      this.game.wrap(this.pos);
    } else {
      if (this.game.isOutOfBounds(this.pos)) {
        this.game.remove(this);        
      }
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    return window.Asteroids.Util.distance(this, otherObject) < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.collideWith = function(otherObject) {};

  MovingObject.prototype.isWrappable = true;
})();
