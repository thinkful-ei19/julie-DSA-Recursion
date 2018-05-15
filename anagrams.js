function anagram(word, chunk){
    if(word.length === 0){
      console.log(chunk);
      return;
    }
    for(var i = 0; i < word.length; i++){
      let prefix = word[i] + chunk;
      let otherLetters = word.substr(0,i)+word.substr(i+1);
      anagram(otherLetters, prefix);
    }
  }
  
  anagram("eas","");


// function anagram(prefix="", word) {
//     if(word.length <= 1) {
//         console.log(prefix + word);
//     } else {
//     for(var i = 0; i < word.length; i++) {
//         let firstLetter = word.substring(i, i+1);
//         let remainingLetters = word.substring(i+1);
//         let previousLetters = word.substring(0, i);
//         anagram(prefix+firstLetter, previousLetters+remainingLetters)
//     }

//     }
// }
// console.log(anagram("", "east"))



// function anagram(prefix="", word) {
//     if(word.length === 1) {
//         co[word];
//     }

//     for(var i = 0; i < word.length; i++) {
//         let firstLetter = word[i];
//         let remainingLetters = word.substr(i+1);
//         let previousLetters = word.substr(0, i);
//         // const ana = anagram(otherLetter);
//         anagrams(prefix+firstLetter, previousLetters+remainingLetters)
     

//     }
    
//     //e a s t
//     //ea es et ae as at ta ts te
//     //eas esa eta eat aes ase ast ase tsa tse tas tsa tea
//     //east esta etas eats aste a

//     //e ea es e e e e e e


//     // return [...ana, firstLetter + otherLetter]
//     // return otherLetter;
// }

// console.log(anagram("east"))
//24




//return input.length * anagram(input.length - 1 );