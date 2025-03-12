// Sum All Odd Fibonacci

// Given a positive integer num, return the sum of all odd Fibonacci
// numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every
// additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
// less than 10 are 1, 1, 3, and 5.

//declare function sumFibs, have arguments num
//make 2 variable to declare first two numbers of Fibonacci sequence
//and 1 variable for sum
//use while loop with condition prev number must be less or equel num
//if condition to check if  Fibonacci number is odd
//true => add number to sum
// generate next Fibonacci number to add prev and cnrrent numbers
//then shift prev and cnrrent numbers
//print num

function sumFibs(num) {
  let fib1 = 1; //prev
  let fib2 = 1; //current
  let sum = 0;

  while (fib1 <= num) {
    if (fib1 % 2 !== 0) {
      sum += fib1;
    }
    let nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
  }

  return sum;
}

console.log(sumFibs(10));
