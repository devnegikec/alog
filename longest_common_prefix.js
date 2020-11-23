/**
 * @param {string[]} strs
 * @return {string}
 * Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 */
var longestCommonPrefix = function(strs) {

    var length = strs.length;
    var prefix = "";
    
    for(let i =0; i < length; i++) {
        prefix = match(prefix, strs[i]);
        if(prefix === "") {
            break;
        }
    }
    return prefix;
};

function match(prefix, str) {
    if(prefix === '') {
        return str;
    } else {
        const smaller = prefix.length > str.length ? str : prefix;
        let output = "";
        for(let i = 0; i< smaller.length; i++) {
            if(prefix[i] === str[i]) {
                output += prefix[i];
            } else {
                break
            }
        }
        return output;
    }
}


var result = longestCommonPrefix(["flower","flow","flight"]);

console.log("result;-", result);
