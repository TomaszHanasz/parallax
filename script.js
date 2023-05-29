"use strict";
// SIMPLE VERSION

// Write a function, Given an integer n, return n:
// answer[n] == "FizzBuzz" if n is divisible by 3 and 5.
// answer[n] == "Fizz" if n is divisible by 3.
// answer[n] == "Buzz" if n is divisible by 5.
// answer[n] ==  if none of the above conditions are true, return n.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "FizzBuzz");
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log(i, "Fizz");
//   } else if (i % 3 !== 0 && i % 5 === 0) {
//     console.log(i, "Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const number = 9;

// const fizzBuzz = (n) => {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (n % 3 === 0 && n % 5 !== 0) {
//     console.log("Fizz");
//   } else if (n % 3 !== 0 && n % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(n);
//   }
// };

// console.log(fizzBuzz(number).parseInt());

/*
ORIGINAL
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

*/
