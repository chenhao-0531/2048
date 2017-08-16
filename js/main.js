var board = new Array();
var score = 0;
$(function(){
  newGame();
});

function newGame() {
  // initialize the board cell and number cell
  init();
  score = 0;
  // randomly generate two numbers
  generateOneNumber();
  generateOneNumber();
}

function init() {
  // initialize 4*4 board cell
  for (var i = 0; i < 4; i++) {
    board[i] = new Array();
    for (var j = 0; j < 4; j++) {
      board[i][j] =0;
      var gridCell = $("#grid-cell-" + i + "-" + j);
      // set the distance from top of the board for each cell
      gridCell.css("top", getPosTop(i, j));
      // set the distance from left of the board for each cell
      gridCell.css("left", getPosLeft(i, j));
    }
  }
  
  /**
  * create another 4*4 number cell for displaying numbers. 
  * The cells locate exactly the same as the cells in init()
  */
  updateBoardView(); 
}

function updateBoardView() {
  // clear all numbers
  $(".number-cell").remove();
  $( "#score" ).text(score);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      // add number cell to the board
      $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
      var numberCell = $("#number-cell-" + i + "-" +j);
      // set number cell width and height to 0 if the board cell is 0
      if (board[i][j] == 0) {
        numberCell.css("width", "0px");
        numberCell.css("height", "0px");
        numberCell.css("top", getPosTop(i, j) + 50);
        numberCell.css("left", getPosLeft(i, j) + 50);
      } else { // set number cell width, height, background-color and number value
        if (Math.floor(board[i][j] / 1000)) {
          numberCell.css("font-size", "35px");
        }
        numberCell.css("width", "100px");
        numberCell.css("height", "100px");
        numberCell.css("top", getPosTop(i, j));
        numberCell.css("left", getPosLeft(i, j));
        numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
        numberCell.css("color", getNumberColor(board[i][j]));
        numberCell.text(board[i][j]);
      }
    }
  }
}

function generateOneNumber() {
  // generate a random x coordinate
  var randX = parseInt(Math.floor(Math.random() * 4));
  // generate a random y coordinate
  var randY = parseInt(Math.floor(Math.random() * 4));
  // genrate random cell position
  while (true) {
    if (board[randX][randY] == 0) {
      break;
    } else {
      // generate another coordinates pair if the cell has value
      var randX = parseInt(Math.floor(Math.random() * 4));
      var randY = parseInt(Math.floor(Math.random() * 4));
    }
  }
  // generate a new random number 2 or 4
  var randNumber = Math.random() < 0.5 ? 2 : 4;
  // display number in the position
  board[randX][randY] = randNumber;
  // add animation for generating random number
  showNumberWithAnimation(randX, randY, randNumber);
}

