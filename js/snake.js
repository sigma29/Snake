(function(){

  window.SnakeGame = window.SnakeGame || {};

  var Snake = SnakeGame.Snake = function() {
    this.dir = Snake.DIRS[Math.floor(Math.random() * 4)];
    this.segments = [[4,4]];
  }

  Snake.DIRS = ["N", "E", "S", "W"];

  Snake.prototype.move = function () {
    var head = new SnakeGame.Coord (this.segments[0]);
    var newHead;
    switch (this.dir) {
      case "N":
      newHead = head.plus(-1, 0);
      break;
      case "E":
      newHead = head.plus(0, 1);
      break;
      case "S":
      newHead = head.plus(1, 0);
      break;
      case "W":
      newHead = head.plus(0, -1);
      break;
    }
    this.segments.unshift(newHead.pos);
    this.segments.pop();
  };

  Snake.prototype.turn = function (dir) {
    this.dir = dir;
  };

  var Coord = SnakeGame.Coord = function(arr) {
    this.row = arr[0];
    this.col = arr[1];
  }

  Coord.prototype.plus = function(drow, dcol) {
    this.row += drow;
    this.col += dcol;
  }

  Coord.prototype.equals = function (otherCoord) {
    return( this.row === otherCoord.row && this.col === otherCoord.col);
  };


  var Board = SnakeGame.Board = function(size) {
    this.size = size;
    this.grid = this.createGrid(size);
    this.snake = new Snake();
    this.fillSnake();
  }

  Board.BLANK = "."
  Board.SNAKE = "S"

  Board.prototype.createGrid = function (size) {
    var row, i, j;
    var grid = [];

    for (i = 0; i < size; i++) {
      row = [];
      for (j = 0; j < size; j++) {
        row.push(Board.BLANK);
      }
      grid.push(row);
    }

    this.grid = grid;
  };

  Board.prototype.fillSnake = function() {
    for (var i = 0; i < this.snake.sections.length; i++) {
      this.grid(this.snake.sections[i]) = Board.SNAKE;
    }
  };

  Board.prototype.render = function () {

    this.grid.each( function(row) {
      console.log(row.join(" "));
    });
  };

})();
