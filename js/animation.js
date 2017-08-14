function showNumberWithAnimation(i, j, randNumber) {
  // get current number cell
  var numberCell = $("#number-cell-" + i + "-" + j);
  // set current number cell background-color and number value
  numberCell.css("background-color", getNumberBackgroundColor(randNumber));
  numberCell.css("color", getNumberColor(randNumber));
  numberCell.text(randNumber);
  // add current number cell animation
  numberCell.animate({
    width: "100px",
    height: "100px",
    top: getPosTop(i, j),
    left: getPosLeft(i, j)
  }, 50);
}

function showMoveAnimation(fromX, fromY, toX, toY) {
  var numberCell = $("#number-cell-" + fromX + "-" + fromY);
  numberCell.animate({
    top: getPosTop(toX, toY),
    left: getPosLeft(toX, toY)
  }, 200);
}