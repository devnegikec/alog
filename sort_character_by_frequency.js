var frequencySort = function(s) {
    var charMap = {};
    var result = "";
 
    for(var i=0; i< s.length; i++) {
        var cur = s[i];
        charMap[cur] = (charMap[cur] || 0) + 1;
    }

    const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);

    sortedArr.forEach((element) => {
        result += element.repeat(charMap[element]);
    })
    return result;
};

var r = frequencySort("trrrree");
console.log(r);