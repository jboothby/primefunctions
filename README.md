# primefunctions
Contains functions written in JavaScript that fit the assignment outline for Home Work 4 in CS 320
These functions make use of the Underscore library for javascript, so the program needs to be run by 
opening index.html in a browser as this file will import the Underscore library before running primefunctions.js

Functions:

    primeGen:
        This function accepts a single parameter and returns an array that contains all prime numbers
        up to, and including, the parameter
        Example: primeGen(10) -> [2, 3, 5, 7]
    
    cumulativeSum:
        This function accepts an array as a parameter and returns an array of the same length where
        each element in the return array is the cumulative sum of all of the elements in the input
        array that are at the same index or before.
        Example: cumulativeSum([1, 2, 3, 4]) -> [1, 3, 6, 10]
        
    maxPrimeSum:
        This function accepts a single number as a parameter, and then then returns an array with two values
           The first value is the number with the following qualities:
           1.) This number is less than the parameter value
           2.) This number is prime
           3.) This number is the sum of consecutive prime numbers
           4.) The number of consecutive primes that add to this number is larger than for any other number that
               fits the first three qualities
           The second value is the number of consecutive primes that sum up to the first value
           Examples: maxPrimeSum(100) -> [ 41, 6] ( because 2 + 3 + 5 + 7 + 11 + 13 = 41)
                     maxPrimeSum(1000) -> [ 953, 21]
                     
# primeFunctions2
This file is the optimized version of primefunctions. Extra calls to the underscore library were removed,
and the code structure was changed. This resulted in speeding up the maxPrimeSum function by over 1000%

# Test Files
These files use the Mocha and Chai library to automate the correctness and performance testing
of the functions in PrimeFunctions. This was use to optimize the code for speed
