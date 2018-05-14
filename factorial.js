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