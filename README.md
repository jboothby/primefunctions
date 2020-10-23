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