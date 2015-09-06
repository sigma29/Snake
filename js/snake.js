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

})();
