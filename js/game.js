$(document).keydown(function(event) {
  switch (event.keyCode) {
    case 37: //left
      if (moveLeft()) {
        generateOneNumber(); 
        //isGameOver(); // if board is full, game over
      }
      break;
    case 38: // up
      break;
    case 39: // right
      if (moveRight()) {
        generateOneNumber(); 
        //isGameOver(); // if board is full, game over
      }
      break;
    case 40: // down
      break;
  }
});

/**
* decide if the cell can move left or not,
* if can, complete move left operation
*/ 
function moveLeft() {
  if (!canMoveLeft(board)) { // cannot move left
    return false;
  } else { 
    // logic for move left operation
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j < 4; j++) {
        // the current cell must have value
        if (board[i][j] != 0) {
          // move the cell to left
          for (var k = 0; k < j; k++) {
            if (board[i][k] == 0 && noBlockHorizontalCol(i, k, j, board)) {
              // current cell has value and all the left cells are 0, can move left
              showMoveAnimation(i, j, i, k);
              board[i][k] = board[i][j];
              board[i][j] = 0;
            } else if (board[i][k] == board[i][j] && noBlockHorizontalCol(i, k, j, board)) {
              // current cell and left cell values are equal, and cells in between are 0, can move left
              showMoveAnimation(i, j, i, k);
              board[i][k] += board[i][j] // add the values
              board[i][j] = 0;
            }
          }
        }
      }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}

function moveRight() {
  if (!canMoveRight(board)) { // cannot move right
    return false;
  } else { 
    // logic for move right operation
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        // the current cell must have value
        if (board[i][j] != 0) {
          // move the cell to right
          for (var k = 3; k > j; k--) {
            if (board[i][k] == 0 && noBlockHorizontalCol(i, k, j, board)) {
              // current cell has value and all the right cells are 0, can move right
              showMoveAnimation(i, j, i, k);
              board[i][k] = board[i][j];
              board[i][j] = 0;
            } else if (board[i][k] == board[i][j] && noBlockHorizontalCol(i, k, j, board)) {
              // current cell and right cell values are equal, and cells in between are 0, can move right
              showMoveAnimation(i, j, i, k);
              board[i][k] += board[i][j] // add the values
              board[i][j] = 0;
            }
          }
        }
      }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}

