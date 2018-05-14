'use strict';

function arrayDouble(array) {
    if(!array.length) {
        return []
    }
    const num = array[0]*2 ;
    return [num, ...arrayDouble(array.slice(1))]; 
}
    

console.log(arrayDouble([1, 2, 3]));
    