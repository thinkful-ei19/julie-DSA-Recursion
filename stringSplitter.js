'use strict';

function strSplit(string, separator) {
    const pointer = string.indexOf(separator);
    if(pointer == -1) {
      return [string];
    }
    return [string.slice(0, pointer)].concat(strSplit(string.slice(pointer + separator.length), separator))
}
  
  
console.log(strSplit("hello there today is monday", " "))


  