// 1. Write a function that returns the factorial of a number.
// 2. Write a function to check if a number is prime.
// 3. Write a function that checks if a given year is a leap year.

// Parameter: int
// Return int
// Example: 2! --> 1*2 --> 2
// Psuedocode:
// n == 0 || n ==1 should return 1

const factorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));

// Parameter: int
// Return: boolean
// Example:
// Psuedocode:
//

const primeNumber = (n) => {
  if (n == 0) {
    return true;
  }
  for (let i = 2; i <= i * i; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
};

console.log(primeNumber(2));

// year %100 cannot be 0 &
const leapYear = (n) => {
  if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(leapYear(2000));
