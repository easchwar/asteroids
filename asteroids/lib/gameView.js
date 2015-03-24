(function () {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var GameView = window.Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    this.interval = window.setInterval(function() {
      if (this.game.isOver()) {
        this.game = new window.Asteroids.Game(Math.floor(this.game.numOfAsteroids * 2));
        // var newGame = new window.Asteroids.Game(Math.floor(this.game.NUM_ASTEROIDS * 1.5));
        // var newView = new GameView(newGame, this.ctx);
        // this.stop();
        // newView.start();
      }

      this.game.step();
      this.game.draw(this.ctx);

    }.bind(this), 20);
  };

  GameView.prototype.stop = function() {
    clearInterval(this.interval);
  };

  GameView.prototype.bindKeyHandlers = function() {
    window.key('up', function() {
      this.game.ship.power([0, -1]);
      console.log("pressed up");
    }.bind(this));
    window.key('down', function() {
      this.game.ship.power([0, 1]);
    }.bind(this));
    window.key('right', function() {
      this.game.ship.power([1, 0]);
    }.bind(this));
    window.key('left', function() {
      this.game.ship.power([-1, 0]);
    }.bind(this));
    window.key('space', function() {
      this.game.ship.fireBullet();
    }.bind(this));
  };
})();
