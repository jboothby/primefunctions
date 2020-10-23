/* This function returns an array containing all prime numbers up to, and including, the parameter
  It implements the Sieve of Eratosthenes and optimizes by only checking up to the next number after
  the square root of the parameter.
 */
function primeGen(thresholdNumber) {
  // create an array and fill it with numbers up to the threshold
  let numberList = [];

  // check for edge cases of negative numbers, 0, and 1
  if (thresholdNumber <= 1) {
    return numberList;
  }

  // populate the array with numbers up to the threshold number
  for (let i = 2; i <= thresholdNumber; i++) {
    numberList.push(i);
  }

  // implement the Sieve of Eratosthenes
  // iterate through each number up to the sqrt of the thresholdNumber and eliminate from the list
  // any number that is divisible by the number being checked. The remaining are all prime
  for (let j = 2; j <= (Math.sqrt(thresholdNumber) + 1); j++) {
    numberList = _.reject(numberList, function (num) { return ((num % j === 0) && (num !== j)); });
  }
  return numberList;
}
