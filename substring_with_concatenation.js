
var findSubstring = function(s, words) {
    let res=[];

    if(s.length == 0 || words.length == 0) {
        return res;
    }

    let n = words.length;
    let m = words[0].length;

    let map = {};

    for(let w of words){  
        map[w] ? map[w]++: (map[w]=1)
    }

    for(let i = 0; i<= s.length - n*m; i++) {
        let temp = {};
        let j = 0;
        for(j = 0; j < n; j++){

            let t = s.substr(i+ j*m, m);
            if(!map[t]) break;

            temp[t] ? temp[t]++: (temp[t] = 1);
            if(temp[t] > map[t]) break;
        }

        if(j==n) res.push(i);
    }

    return res;
};

var s = "barbarfoothefoobarman", words = ["foo","bar"];

var r = findSubstring(s, words);
console.log(r);
