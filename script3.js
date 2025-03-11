// Magic Squares

// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row,
// column, and major diagonal adds up to 15. Here's an example:
{
  /* <code>8 1 6 3 5 7 4 9 2</code>; */
}
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

// Write a function that, given a grid containing the numbers 1-9, determines
// whether it's a magic square. Use whatever format you want for the grid, such
// as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that
// takes 9 arguments. You do not need to parse the grid from the program's input, but
// you can if you want to. You don't need to check that each of the 9 numbers appears in
// the grid: assume this to be true.

//declare function isMagicSquare, arr as paramneter
//declare 2 variables to hold sum of diagonals
// condition if diagonals is equal each other
//return true
//if not => return false

// [8, 1, 6,
// 3, 5, 7,
// 4, 9, 2] => true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] => true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] => false
// [8, 1, 6, 7, 5, 3, 4, 9, 2] => false

let array = [3, 5, 7, 8, 1, 6, 4, 9, 2];

function isMagicSquare(arr) {
  let diagonal1 = array[0] + array[4] + array[8];
  let diagonal2 = array[2] + array[4] + array[6];
  if (diagonal1 === diagonal2) {
    return true;
  }
  return false;
}
console.log(isMagicSquare(array));
