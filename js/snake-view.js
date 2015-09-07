(function() {
  window.SnakeGame = window.SnakeGame || {};

  var View = SnakeGame.View = function(el) {
    this.$el = $(el);
    this.board = new SnakeGame.Board(10);
    this.snake = this.board.snake;
    this.$el.on("keydown", this.handleKeyEvent.bind(this));
    setInterval(this.step.bind(this), 500);
  };

  View.prototype.handleKeyEvent = function (event) {
      var key = event.keyCode;
      e.preventDefault();

      switch(key) {
        case 37:  //left-arrow
          this.snake.turn("W")
          break;
        case 38:  //up-arrow
          this.snake.turn("N")
          break;
        case 39:  //right-arrow
          this.snake.turn("E")
          break;
        case 40:  //down-arrow
          this.snake.turn("S")
          break;
      }
  };

  View.prototype.step = function () {
    this.snake.move();
    this.board.resetGrid();
    this.board.render();
  };

})();
