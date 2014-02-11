var kBoardHeight = 9;
var kBoardWidth = 9;
var kPieceWidth = 50;
var kPieceHeight = 50;
var kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
var kPixelHeight = 1 + (kBoardHeight * kPieceHeight);

var gCanvasElement;
var gDrawingContext;
var gPattern;

var gPieces;
var gNumPieces;
var gSelectedPieceIndex;
var gSelectedPieceHasMoved;
var gMoveCount;
var gMoveCountElem;
var gGameInProgress;

function Cell(row, column) {
  this.row = row;
  this.column = column;
}

window.onload = function() {
  gCanvasElement = document.getElementById("halma_canvas");
  gCanvasElement.width = kPixelWidth;
  gCanvasElement.height = kPixelHeight;
  // gCanvasElement.addEventListener("click", halmaOnClick, false);
  gDrawingContext = gCanvasElement.getContext("2d");

  gMoveCountElem = document.getElementById("movecount");

  newGame();
};

function newGame() {
  gPieces = [new Cell(kBoardHeight - 3, 0),
         new Cell(kBoardHeight - 2, 0),
         new Cell(kBoardHeight - 1, 0),
         new Cell(kBoardHeight - 3, 1),
         new Cell(kBoardHeight - 2, 1),
         new Cell(kBoardHeight - 1, 1),
         new Cell(kBoardHeight - 3, 2),
         new Cell(kBoardHeight - 2, 2),
         new Cell(kBoardHeight - 1, 2)];
  gNumPieces = gPieces.length;
  gSelectedPieceIndex = -1;
  gSelectedPieceHasMoved = false;
  gMoveCount = 0;
  gGameInProgress = true;
  drawBoard();
}

function updateMoveCount() {
  gMoveCountElem.innerHTML = gMoveCount;
}

function drawBoard() {
  // if (gGameInProgress && isTheGameOver()) {
  //   endGame();
  // }

  gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);
  gDrawingContext.beginPath();

  drawLines();
  drawPieces();
  updateMoveCount();
}

function drawPieces() {
  for (var i = 0; i < 9; i++) {
    drawPiece(gPieces[i], i === gSelectedPieceIndex);
  }
}

function drawPiece(piece, isSelected) {
  var x = (piece.column * kPieceWidth) + (kPieceWidth/2);
  var y = (piece.row * kPieceHeight) + (kPieceHeight/2);
  var radius = (kPieceWidth/2) - (kPieceWidth/10);
  gDrawingContext.beginPath();
  gDrawingContext.arc(x, y, radius, Math.PI*2, false);
  gDrawingContext.closePath();
  gDrawingContext.strokeStyle = "#000";
  gDrawingContext.stroke();
  if (isSelected) {
    gDrawingContext.fillStyle = "#000";
    gDrawingContext.fill();
  }
}

function drawLines() {
  drawVerticalLines();
  drawHorizontalLines();
  gDrawingContext.strokeStyle = "#ccc";
  gDrawingContext.stroke();
}

function drawVerticalLines() {
  for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
    gDrawingContext.moveTo(0.5 + x, 0);
    gDrawingContext.lineTo(0.5 + x, kPixelHeight);
  }
}

function drawHorizontalLines() {
  for (var y = 0; y <= kPixelWidth; y += kPieceWidth) {
    gDrawingContext.moveTo(0, 0.5 + y);
    gDrawingContext.lineTo(kPixelWidth, 0.5 + y);
  }
}