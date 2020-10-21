function longest_substring(str) {
    let start = 0,
        maxLength = 0,
        temp = {};
    
    for (let end = 0; end < str.length; end++) {
        const right = str[end];

        if(right in temp) {
            start = Math.max(start, temp[right] + 1);
        }
        temp[right] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}


var r = longest_substring('aabccbb');
console.log(r);
var r1 = longest_substring('abccde');
console.log(r1);


























// function longest_substring(str) {
//     let start = 0,
//         maxLength = 0,
//         temp = {};

//     for (let end = 0; end < str.length; end++) {
//         const right = str[end];

//         if(right in temp) {
//             start = Math.max(start, temp[right] + 1);
//         }
//         temp[right] = end;
//         maxLength = Math.max(maxLength, end - start + 1);
//     }
//     return maxLength;
// }



// Input: String="a abc cbb"
/**
 * right = a;
 * {a: 1}
 */
// Output: 3
// abacca, {a: 2, b: 1}