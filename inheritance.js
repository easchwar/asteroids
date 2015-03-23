Function.prototype.inherits = function(parentObject) {
  function Surrogate() {}
  Surrogate.prototype = parentObject.prototype;
  this.prototype = new Surrogate();
};



function MovingObject() {}

function Ship(name) {
  this.name = name;
}

Ship.inherits(MovingObject);

function Asteroid() {}

Asteroid.inherits(MovingObject);


MovingObject.prototype.move = function() {
  console.log("I'm moving!!");
};

Ship.prototype.blast = function() {
  console.log("Blasting!!");
};

var ship = new Ship();
var asteroid = new Asteroid();
ship.move();
asteroid.move();
asteroid.blast();
