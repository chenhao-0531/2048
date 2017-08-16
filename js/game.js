$(document).keydown(function(event) {
  switch (event.keyCode) {
    case 37: //left
      if (moveLeft()) {
        setTimeout("generateOneNumber();", 200);
        setTimeout("IsGameOver();", 300);

      }
      break;
    case 38: // up
      if (moveUp()) {
        setTimeout("generateOneNumber();", 200);
        setTimeout("IsGameOver();", 300);

      }
      break;
    case 39: // right
      if (moveRight()) {
        setTimeout("generateOneNumber();", 200);
        setTimeout("IsGameOver();", 300);

      }
      break;
    case 40: // down
      if (moveDown()) {
        setTimeout("generateOneNumber();", 200);
        setTimeout("IsGameOver();", 300);

      }
      break;
  }
  
});

/**
* decide if the cell can move left or not,
* if can, complete move left operation
*/ 
/*function moveLeft() {
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
}*/


function IsGameOver(){
  if(!canMoveLeft(board) && !canMoveRight(board) && !canMoveUp(board) && !canMoveDown(board)){
    alert("Game Over")
  }
}

function moveLeft() {
  if (!canMoveLeft(board)) { // cannot move left
    return false;
  } else {
    for (var i = 0; i < 4; i++) {
      var last_combine_position = 0;
      for (var j = 1; j < 4; j++) {
        // the current cell must have value
        if (board[i][j] != 0) {
          //the current left value 
          for(var k = j - 1 ; k  >= last_combine_position ; k--){
            if(board[i][k] == 0){
              if(k == last_combine_position){
                showMoveAnimation(i, j, i, k);
                board[i][k] = board[i][j];
                board[i][j] = 0;
              }
                continue;
              }else if(board[i][k] == board[i][j]) {
                showMoveAnimation(i, j, i, k);
                board[i][k] *= 2;
                board[i][j] = 0;
                score += board[i][k];
                last_combine_position = k + 1;
              }else{
                if(board[i][k+1] == 0){
                  showMoveAnimation(i, j, i, k+1);
                  board[i][k+1] = board[i][j];
                  board[i][j] = 0;
                }else{
                  break;
                }
              }
            }
          }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}

/*
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
}*/

function moveRight() {
  if (!canMoveRight(board)) { // cannot move left
    return false;
  } else {
    for (var i = 0; i < 4; i++) {
      var last_combine_position = 3;
      for (var j = 2; j >=0 ; j--) {
        // the current cell must have value
        if (board[i][j] != 0) {
          //the current left value 
          for(var k = j + 1 ; k  <= last_combine_position ; k++){
            if(board[i][k] == 0){
              if(k == last_combine_position){
                showMoveAnimation(i, j, i, k);
                board[i][k] = board[i][j];
                board[i][j] = 0;
              }
                continue;
              }else if(board[i][k] == board[i][j]) {
                showMoveAnimation(i, j, i, k);
                board[i][k] *= 2;
                board[i][j] = 0;
                score += board[i][k];
                last_combine_position = k - 1;
              }else{
                if(board[i][k-1] == 0){
                  showMoveAnimation(i, j, i, k-1);
                  board[i][k-1] = board[i][j];
                  board[i][j] = 0;
                }else{
                  break;
                }
              }
            }
          }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}

/*
function moveUp() {
  if (!canMoveUp(board)) { // cannot move up
    return false;
  } else { 
    // logic for move up operation
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j < 4; j++) {
        // the current cell must have value
        if (board[j][i] != 0) {
          // move the cell to top
          for (var k = 0; k < j; k++) {
            if (board[k][i] == 0 && noBlockVerticalRow(j, k, j, board)) {
              // current cell has value and all the top cells are 0, can move up
              showMoveAnimation(j, i, k, i);
              board[k][i] = board[j][i];
              board[j][i] = 0;
            } else if (board[k][i] == board[j][i] && noBlockVerticalRow(k, i, j, board)) {
              // current cell and top cell values are equal, and cells in between are 0, can move up
              showMoveAnimation(j, i, k, i);
              board[k][i] += board[j][i] // add the values
              board[j][i] = 0;
            }
          }
        }
      }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}*/





function moveUp() {
  if (!canMoveUp(board)) { // cannot move left
    return false;
  } else {
    for (var i = 0; i < 4; i++) {
      var last_combine_position = 0;
      for (var j = 1; j < 4; j++) {
        // the current cell must have value
        if (board[j][i] != 0) {
          //the current left value 
          for(var k = j - 1 ; k  >= last_combine_position ; k--){
            if(board[k][i] == 0){
              if(k == last_combine_position){
                showMoveAnimation(j, i, k, i);
                board[k][i] = board[j][i];
                board[j][i] = 0;
              }
                continue;
              }else if(board[k][i] == board[j][i]) {
                showMoveAnimation(j, i, k, i);
                board[k][i] *= 2;
                board[j][i] = 0;
                score += board[k][i];
                last_combine_position = k + 1;
              }else{
                if(board[k+1][i] == 0){
                  showMoveAnimation(j, i, k+1, i);
                  board[k+1][i] = board[j][i];
                  board[j][i] = 0;
                }else{
                  break;
                }
              }
            }
          }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}


/*function moveDown() {
  if (!canMoveDown(board)) { // cannot move down
    return false;
  } else { 
    // logic for move up operation
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        // the current cell must have value
        if (board[j][i] != 0) {
          // move the cell to bottom
          for (var k = 3; k > j; k--) {
            if (board[k][i] == 0 && noBlockVerticalRow(j, k, j, board)) {
              // current cell has value and all the bottom cells are 0, can move down
              showMoveAnimation(j, i, k, i);
              board[k][i] = board[j][i];
              board[j][i] = 0;
            } else if (board[k][i] == board[j][i] && noBlockVerticalRow(k, i, j, board)) {
              // current cell and bottom cell values are equal, and cells in between are 0, can move down
              showMoveAnimation(j, i, k, i);
              board[k][i] += board[j][i] // add the values
              board[j][i] = 0;
            }
          }
        }
      }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}*/

function moveDown() {
  if (!canMoveDown(board)) { // cannot move left
    return false;
  } else {
    for (var i = 0; i < 4; i++) {
      var last_combine_position = 3;
      for (var j = 2; j >=0 ; j--) {
        // the current cell must have value
        if (board[j][i] != 0) {
          //the current left value 
          for(var k = j + 1 ; k  <= last_combine_position ; k++){
            if(board[k][i] == 0){
              if(k == last_combine_position){
                showMoveAnimation(j, i, k, i);
                board[k][i] = board[j][i];
                board[j][i] = 0;
              }
                continue;
              }else if(board[k][i] == board[j][i]) {
                showMoveAnimation(j, i, k, i);
                board[k][i] *= 2;
                board[j][i] = 0;
                score += board[k][i];
                last_combine_position = k - 1;
              }else{
                if(board[k-1][i] == 0){
                  showMoveAnimation(j, i, k-1, i);
                  board[k-1][i] = board[j][i];
                  board[j][i] = 0;
                }else{
                  break;
                }
              }
            }
          }
        }
    }
    setTimeout("updateBoardView();", 200);
    return true;
  }
}






