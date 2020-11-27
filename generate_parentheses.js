var generateParenthesis = function(n) {
    var output = [];
    if (n < 2) {
        return output;
    }

    helper(n, "", output, 0, 0);
    return output;
}

var helper = function(max, str, arr, open, close) {
    if(str.length === max*2) {
        arr.push(str);
        return;
    }

    if(open < max) {
        helper(max, str+'(', arr, open+1, close);
    }

    if(close < open) {
        helper(max, str+')', arr, open, close+1);
    }
}

var result = generateParenthesis(3);
console.log(result);