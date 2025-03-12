// Write a program that returns an array consisting of the largest number
// from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

let X = [
  [4, 2, 7, 1],
  [20, 70, 40, 90],
  [1, 2, 0, 5],
  [5, 10, 15, 20],
];
//return [7, 90, 5, 20]

function largestNum(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let maxN = array[i][0];
    for (let j = 1; j < array[i].length; j++) {
      if (array[i][j] > maxN) {
        maxN = array[i][j];
      }
    }
    newArray.push(maxN);
  }
  return newArray;
}
console.log(largestNum(X));
