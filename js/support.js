function getPosTop(i, j) {
  return 20 + i * 120; // 100 is the cell height, 20 is the margin
}

function getPosLeft(i, j) {
  return 20 + j * 120; // 100 is the cell height, 20 is the margin
}

function getNumberBackgroundColor(number) {
  switch(number) {
    case 2:
      return "#eee4da";
      break;
    case 4:
      return "#ede0c8";
      break;
    case 8:
      return "#f2b179";
      break;
    case 16:
      return "#f59563";
      break;
    case 32:
      return "#f67c5f";
      break;
    case 64:
      return "#f65e3b";
      break;
    case 128:
      return "#edcf72";
      break;
    case 256:
      return "#edcc61";
      break;
    case 512:
      return "#9c0";
      break;
    case 1024:
      return "#33b5e5";
      break;
    case 2048:
      return "#09c";
      break;
    case 4096:
      return "#a6c";
      break;
    case 8192:
      return "93c";
      break;
  }
}

function getNumberColor(number) {
  if (number <= 4) 
    return "#776e65";
  return "white";
    
}

/**
* check if all the left cells of current cell has value 0
*/
function noBlockHorizontalCol(row, targetColumn, currentColumn, board) {
  for (var i = targetColumn + 1; i < currentColumn; i++) {
    if (board[row][i] != 0)
      return false;
  }
  return true;
}

/** 
* decide if the cell can move left or not 
* return true if it can, false otherwise
*/
function canMoveLeft(board) {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (board[i][j] != 0) {
        // left of the current cell has value 0, or current cell and the cell on the left have same value
        if (board[i][j-1] == 0 || board[i][j-1] == board[i][j])
          return true;
      }
    }
  }
  return false;
}

function canMoveRight(board) {
  for (var i = 0; i < 4; i++) {
    for (var j = 3; j >=0 ; j--) {
      if (board[i][j] != 0) {
        // right of the current cell has value 0, or current cell and the cell on the right have same value
        if (board[i][j+1] == 0 || board[i][j] == board[i][j+1])
          return true;
      }
    }
  }
  return false;
}