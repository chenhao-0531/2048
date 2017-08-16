function getPosTop(i, j) {
  return 20 + i * 120; // 100 is the cell height, 20 is the margin
}

function getPosLeft(i, j) {
  return 20 + j * 120; // 100 is the cell height, 20 is the margin
}

function getNumberBackgroundColor(number) {
  var color = "";
  switch (number) {
  case 2:
    color = "#eee4da";
    break;
  case 4:
    color = "#ede0c8";
    break;
  case 8:
    color = "#f2b179";
    break;
  case 16:
    color = "#f59563";
    break;
  case 32:
    color = "#f67c5f";
    break;
  case 64:
    color = "#f65e3b";
    break;
  case 128:
    color = "#edcf72";
    break;
  case 256:
    color = "#edcc61";
    break;
  case 512:
    color = "#9c0";
    break;
  case 1024:
    color = "#33b5e5";
    break;
  case 2048:
    color = "#09c";
    break;
  case 4096:
    color = "#a6c";
    break;
  case 8192:
    color = "93c";
    break;
  }
  return color;
}

function getNumberColor(number) {
  return number <= 4 ? "#776e65" : "white";
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

function noBlockVerticalRow(column, targetRow, currentRow, board) {
  for (var i = targetRow + 1; i < currentRow; i++) {
    if (board[i][column] != 0)
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
    for (var j = 2; j >=0 ; j--) {
      if (board[i][j] != 0) {
        // right of the current cell has value 0, or current cell and the cell on the right have same value
        if (board[i][j+1] == 0 || board[i][j] == board[i][j+1])
          return true;
      }
    }
  }
  return false;
}

function canMoveUp(board) {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (board[j][i] != 0) {
        // top of the current cell has value 0, or current cell and the cell on the top have same value
        if (board[j-1][i] == 0 || board[j-1][i] == board[j][i])
          return true;
      }
    }
  }
  return false;
}

function canMoveDown(board) {
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if (board[j][i] != 0) {
        // top of the current cell has value 0, or current cell and the cell on the bottom have same value
        if (board[j+1][i] == 0 || board[j+1][i] == board[j][i])
          return true;
      }
    }
  }
  return false;
}