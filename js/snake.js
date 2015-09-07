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

  Snake.prototype.isOpposite = function (dir) {
    var dirs = [dir, this.dir].sort().join("");

    if (dirs === "NS" || dirs === "EW") {
      return true;
    }

    return false;
  };

  Snake.prototype.turn = function (dir) {
    if (this.isOpposite(dir)) { return; }
    
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
    this.grid = this.createGrid(this.size);
    this.snake = new Snake();
    this.fillSnake();
  }

  Board.BLANK = "."
  Board.SNAKE = "S"

  Board.prototype.createGrid = function(size) {
    var row, i, j;
    var grid = [];

    for (i = 0; i < size; i++) {
      row = [];
      for (j = 0; j < size; j++) {
        row.push(Board.BLANK);
      }
      grid.push(row);
    }

    return grid;
  };

  Board.prototype.setSquare = function(square,value) {
    this.grid[square[0]][square[1]] = value;
  };

  Board.prototype.fillSnake = function() {
    for (var i = 0; i < this.snake.segments.length; i++) {
      this.setSquare(this.snake.segments[i],Board.SNAKE);
    }
  };

  Board.prototype.render = function () {

    this.grid.forEach( function(row) {
      console.log(row.join(" "));
    });
  };

})();
