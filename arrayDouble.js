'use strict';

function arrayDouble(array) {
    if(!array.length) {
        return []
    }
    const num = array[0]*2 ;
    return [num, ...arrayDouble(array.slice(1))]; 
}
    

console.log(arrayDouble([1, 2, 3]));
    

function arrayDoubleIter(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]*2);
    }
    return arrayDoubleIter;
}

console.log(arrayDoubleIter([1, 2, 3]))