(function () {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  window.Asteroids.Util = window.Asteroids.Util || {};

  var inherits = window.Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  window.Asteroids.Util.randomVec = function(length) {
    var x = Math.random() * 2 - 1;
    var y = Math.random() * 2 - 1;
    var scale = Math.sqrt(x * x + y * y);
    x = x * length / scale;
    y = y * length / scale;
    return [x, y];
  };

  window.Asteroids.Util.distance = function(obj1, obj2) {
    var x = obj1.pos[0] - obj2.pos[0];
    var y = obj1.pos[1] - obj2.pos[1];
    return Math.sqrt(x * x + y * y);
  };
})();
