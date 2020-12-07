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

  /*
   populate the array with numbers up to the threshold number
  */
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

/* This function takes a list of numbers, and returns the cumulative sum of the numbers
   Each value in the return array will be the cumulative sum of all the numbers before it in the input array
   so position 3 in the return array will contain the sum of positions 0-2 in the input array
 */
function cumulativeSum(inputArray) {
  const returnArray = [];

  // push initial value onto the return array because this does not change
  returnArray.push(inputArray[0]);
  for (let i = 1; i <= inputArray.length; i++) {
    returnArray.push(inputArray[i] + returnArray[i - 1]);
  }

  return returnArray;
}

/* This function accepts a single number as a parameter, and then then returns an array with two values
   The first value is the number with the following qualities:
   1.) This number is less than the parameter value
   2.) This number is prime
   3.) This number is the sum of consecutive prime numbers
   4.) The number of consecutive primes that add to this number is larger than for any other number that
       fits the first three qualities
   The second value is the number of consecutive primes that sum up to the first value
   Examples: maxPrimeSum(100) -> [ 41, 6] ( because 2 + 3 + 5 + 7 + 11 + 13 = 41)
             maxPrimeSum(1000) -> [ 953, 21]
 */
function maxPrimeSum(inputNumber) {
  // create an array of all primes less than the value ( meets quality 1 and 2 above)
  const primeArray = primeGen(inputNumber);

  // create a return array
  let returnArray = [0, 0];

  // slice the primeArray into increasingly small pieces and check for sequential numbers
  // every cumulative sum i have seen uses one of the first 5 primes, so we cut this to 5
  for (let i = 0; i < 5; i++) {
    const tempArray = primeArray.slice(i, primeArray.length);
    // find the cumulativeSum of values in the tempArray
    const cumulativeArray = cumulativeSum(tempArray);

    // iterate through the cumulative sum array and check to see if values are prime
    // the (index + 1) of the prime number in the array is number of cumulative primes required to create that sum
    // we start at position 1 because position to be consecutive numbers, we have to add at least 2
    // this loops satisfies quality 3 and 4 for this function
    for (let j = 1; j < cumulativeArray.length; j++) {
      // check to see if number is prime, and it's consecutive value is higher than any before it
      if ((tempArray.indexOf(cumulativeArray[j]) !== -1) && (j + 1 > (returnArray[1]))) {
        // update the return array with the new largest
        returnArray = [cumulativeArray[j], j + 1];
      }
    }
  }

  return returnArray;
}

// Test Code

console.log('primeGen(100)=', primeGen(100));
console.log('cumulativeSum(primeGen(100))=', cumulativeSum(primeGen(100)));
console.log('maxPrimeSum(100)=', maxPrimeSum(1000));
