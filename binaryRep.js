'use strict';

function binaryRep(input) {
    if(input < 1) {
        return '';
    }
 
    return binaryRep(Math.floor(input/2))+(input % 2);

}

console.log(binaryRep(25))


function convertToBinaryIter(num){
    var binary = '';
    while(num>0){
        let rem = Math.floor(num%2);
        binary = rem + binary;
        num = Math.floor(num/2);
    }
    return binary;


}
console.log(convertToBinaryIter(124));