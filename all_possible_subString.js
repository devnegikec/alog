var subString = function(str){
    var result = [""];
    var i =0;
    while(i<str.length) {
        cur = str[i++];
        for(const str of [...result]) {
            result.push(str+cur);
        } 
    }

    return result;
}

console.log(subString("abc"));