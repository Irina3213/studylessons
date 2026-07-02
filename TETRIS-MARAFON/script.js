const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;

const TETROMINO_NAMES = ["O", "J", "L", "I", "S", "T", "Z"];

const TETROMINOES = {
  O: [
    [1, 1],
    [1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
};

let tetromino = {
  name: "",
  matrix: [],
  row: 0,
  column: 0,
};

let playfield;

function generatePlayField() {
  for (let i = 0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++) {
    const div = document.createElement("div");
    document.querySelector(".tetris").append(div);
  }

  playfield = new Array(PLAYFIELD_ROWS)
    .fill()
    .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  // console.table(playfield);
}

function generateTetromino() {
  const nameTetro = TETROMINO_NAMES[0];
  const matrix = TETROMINOES[0];

  const columnTetro = 4;
  const rowTetro = 5;

  tetromino = {
    name: nameTetro,
    matrix: matrix,
    name: columnTetro,
    name: rowTetro,
  };
}

generatePlayField();

let cells = document.querySelectorAll(".tetris div");

generateTetromino();

// function drawTetromino() {
//   const name = tetromino.name;
//   const tetrominoMatrixSize = tetromino.matrix.length;

//   for (let row = 0; row < tetrominoMatrixSize; row++) {
//     for (let column = 0; column < tetrominoMatrixSize; column++) {
//       if (!tetromino.matrix[row][column]) continue;
//       const cellIndex = convertPositionToIndex(
//         tetromino.row + row,
//         tetromino.column + column
//       );
//       // console.log(cellIndex);
//       cells[cellIndex].classList.add(name);
//     }
//     // column
//   }
//   // row
// }
// const cells = document.querySelectorAll(".grid div");

function drawPlayField() {
  playfield[7][6] = "O";
  for (let row = 0; row < PLAYFIELD_ROWS; row++) {
    for (let column = 0; column < PLAYFIELD_COLUMNS; column++) {
      if (!playfield[row][column]) continue;

      const nameFigure = "O";

      const cellIndex = convertPositionToIndex(row, column);

      cells[cellIndex].classList.add(nameFigure);
      // if (playfield[row][column] == 0) continue;
      // const name = playfield[row][column];

      // // console.log(cellIndex);
      // cells[cellIndex].classList.add(name);
    }
  }
}

function convertPositionToIndex(row, column) {
  return row * PLAYFIELD_COLUMNS + column;
}
// drawTetromino();
drawPlayField();

// function draw() {
//   cells.forEach((cell) => cell.removeAttribute("class"));
//   drawPlayField();
//   drawTetromino();
// }

// draw();

// document.addEventListener("keydown", onKeyDown);
// function onKeyDown(e) {
//   switch (e.key) {
//     case "ArrowDown":
//       moveTetrominoDown();
//       break;
//     case "ArrowLeft":
//       moveTetrominoLeft();
//       break;
//     case "ArrowRight":
//       moveTetrominoRight();
//       break;
//   }

//   draw();
// }

// function moveTetrominoDown() {
//   tetromino.row += 1;
// }
// function moveTetrominoLeft() {
//   tetromino.column -= 1;
// }
// function moveTetrominoRight() {
//   tetromino.column += 1;
// }
