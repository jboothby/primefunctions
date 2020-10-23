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

  // iterate through the input array and slice it into temporary array that holds all items up to current value of i
  // pass this temporary array to the _.reduce function, and then assign this value into the return array
  for (let i = 1; i <= inputArray.length; i++) {
    const tempArray = inputArray.slice(0, (i));
    returnArray.push(_.reduce(tempArray, function (memo, num) { return memo + num; }));
  }

  return returnArray;
}
