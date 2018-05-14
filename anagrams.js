function anagram(word) {
    if(word.length === 1) {
        return [word];
    }
    for(var i = 0; i < word.length; i++) {
        let firstLetter = word[i];
        let otherLetter = word.substr(0, i) + word.substr(i+1);
        // const ana = anagram(otherLetter);
        console.log(firstLetter, otherLetter) 
     

    }
    
    // return [...ana, firstLetter + otherLetter]
    // return otherLetter;
}

console.log(anagram("east"))
//24




//return input.length * anagram(input.length - 1 );