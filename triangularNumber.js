'use strict';

function triNum(num) {
    if(num <= 1) {
        return num;
    }
    return num + triNum(num - 1);

}

triNum(4)
//10

function triNumIter(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total;    
}

console.log(triNumIter(3));