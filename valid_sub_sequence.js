function isValidSubsequence(array, sequence) {
    const max = array.length;
    const subLength = sequence.length;
    let i = 0, j = 0;
    while(i < max && j < subLength) {
        if(array[i] === sequence[j]) j++;
        i++
    }
    return j === subLength;
}