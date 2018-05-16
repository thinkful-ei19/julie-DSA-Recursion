'use strict';

function factorial(num) {
    if(num < 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5))
//120


// factorial(num * (num -1)) infinite recursion can never approach 0

function factorialIterative(number){
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
 }
 console.log(factorialIterative(5));