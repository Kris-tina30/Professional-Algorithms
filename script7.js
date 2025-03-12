// Sum All Primes

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only
// two divisors, one and itself. For example, 2 is a prime number because
// it's only divisible by one and two.

// The provided number may not be a prime.

//declare function sumPrimes, num as parameter
//make variable to hold sum
//use for loop start = 2; end = num
//make boolean variable isPrime equel to true
//use second for loop start =2 ; end num-1
//condition for define prime number,
// if number divided on j without reminder
// true =>  that is not a prime number
//use breack to stop prosess
// false => add number to sum
//return sum

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumPrimes(10));
