(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var img = window.Asteroids.img = document.createElement('img');
  img.onload = function () {
    window.ctx.drawImage(img, 0, 0);
  };
  img.src = 'space.jpg';
  img.width = 500;
  img.height = 400;

})();
