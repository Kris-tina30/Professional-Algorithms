// Bubble Sort
// While the array is not sorted, the code would do the following steps:

// Take each pair of 2 adjacent numbers and compare them.
// If their order is not correct, switch them.
// The very important step is to keep in mind that these steps are
// repeated over and over until the array gets to its final sorted state.

//declare function bubleSort, arr as paramneter
//use for loop start = 0; end = arr.length - 1
//declare variable swaped eqiel true
//use second for loop start = 0; end = arr.length - 1-i
// condition if currunt number bigger then next
// make variable to hold currunt number
// true current number shift to next
// next shift to current
// after first for loop if swaped = false => stop loop
//after first for loop print arr

let arr = [5, 1, 9, 4, 3, 7];

function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
    if (!swaped) break;
  }
  return arr;
}
console.log(bubleSort(arr));
