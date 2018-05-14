'use strict';

function reverseString(string) {
  if(string === "") {
      return "";
  }
  const eachChar = string[string.length-1];
  
  return eachChar + reverseString(string.slice(0, string.length-1))
}

console.log(reverseString('yolo'));