// Selection Sort

// Go through the array, find the index of the lowest element
// swap the lowest element with the first element.
// Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) find the index
// of the lowest and swap it with the second element.

// That is how it continues to select (find out) the lowest element of the array and
// put it on the left until it hits the last element.

let selectionArray = [29, 72, 98, 13, 87, 66, 52, 51, 36];

//declare function selectionSort, arr as paramneter
//make variable to hold currunt number
//make variable to hold min index
//use for loop start = 0; end = arr.length
//min index must be equel to current index
//use second for loop start =current index -1 ; end = arr.length
//condition to compare current value with min value
// if current value less then min value
// true =>  change min index to j
// after first for loop => giv currunt number value of currunt number in array
//then shift currunt number in array to min value in array
//then shift min value in array to currunt number value
//after second for loop => return array

function selectionSort(arr) {
  let minIndex;
  let number;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    number = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = number;
  }
  return arr;
}
console.log(selectionSort(selectionArray));
