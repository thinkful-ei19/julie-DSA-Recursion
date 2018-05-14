'use strict';

function fib(input) {
    if(input === 1){
        return [0,1];
    }
    let seq = fib(input - 1 );
    seq.push(seq[seq.length-1] + seq[seq.length-2])
    return seq;
   
}

console.log(fib(5))
//1 1 2 3 5 


// function fibo(int) {  
//     if (int === 0){
//       return 0;
//     }
//     else if (int === 1) {
//       return 1;
//     }
//     else {
//       return fibo(int-1) + fibo(int-2);
//     }
//   }