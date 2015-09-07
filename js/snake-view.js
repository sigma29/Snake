(function() {
  window.SnakeGame = window.SnakeGame || {};

  var View = SnakeGame.View = function(el) {
    this.$el = $(el);
    this.board = new SnakeGame.Board();

    this.$el.on("keydown", this.handleKeyEvent.bind(this));
  };

  View.prototype.handleKeyEvent = function (event) {
      var key = event.keyCode;
      e.preventDefault();

      switch(key) {
        case 37:  //left-arrow
          this.board.snake.turn("W")
          break;
        case 38:  //up-arrow
          this.board.snake.turn("N")
          break;
        case 39:  //right-arrow
          this.board.snake.turn("E")
          break;
        case 40:  //down-arrow
          this.board.snake.turn("S")
          break;
      }
  };

})();
