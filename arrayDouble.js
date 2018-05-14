function arrayDouble(array) {
    if(!array.length) {
        return []
    }
    const num = array[0]*2 ;
    return [num, ...arrayDouble(array.slice(1))]; 
}
    

arrayDouble([1, 2, 3]);
    