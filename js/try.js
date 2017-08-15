console.log("hello world");

var board = [[2,2,4,0], 
			 [2,0,2,0],
			 [2,0,0,2],
			 [0,0,0,2]];



moveLeft();
console.log(board);

var board = [[2,4,2,0], 
			 [4,0,2,0],
			 [4,0,0,2],
			 [0,4,0,2]];
moveLeft();

console.log(board);


var board = [[4,4,4,4], 
			 [2,4,2,4],
			 [2,0,0,2],
			 [0,4,0,2]];
moveLeft();

console.log(board);

function noBlockHorizontalCol(row, targetColumn, currentColumn, board) {
  for (var i = targetColumn + 1; i < currentColumn; i++) {
    if (board[row][i] != 0)
      return false;
  }
  return true;
}

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


console.log(noBlockHorizontalCol(0, 0, 1, board));
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
		        				board[i][k] = board[i][j];
			        			board[i][j] = 0;
		        			}
		        			continue;
		        		}else if(board[i][k] == board[i][j]) {
		        			board[i][k] *= 2;
		        			board[i][j] = 0;
		        			last_combine_position = k + 1;
		        		}else{
		        			if(board[i][k+1] == 0){
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
		return true;
	}
}
    

