'use strict';

function binaryRep(input) {
    if(input < 1) {
        return '';
    }
    if(input >= 1){
        return binaryRep(Math.floor(input/2))+(input % 2);
    } 

}

console.log(binaryRep(25))
//11