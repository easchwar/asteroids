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
})();
