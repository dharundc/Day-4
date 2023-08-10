function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbersFromArray(array) {
  return array.filter(isPrime);
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const primeNumbers = getPrimeNumbersFromArray(numbers);

console.log("Prime Numbers:", primeNumbers);
