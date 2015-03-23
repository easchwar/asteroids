(function () {

  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  };

})();

// var options = {
//   pos: [50,50],
//   radius: 10,
//   color: 'red'
// };
// var mov = new window.Asteroids.MovingObject(options);
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// mov.draw(ctx);
