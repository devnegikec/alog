/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var closing = [']', '}', ')'];
    var map = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    
    if(!s.length) return false;
    
    for(var i =0; i < s.length; i++) {
        var cur = s[i];
        
        var isClosing = closing.indexOf(cur) !== -1;
        
        if(isClosing) {
            var last = stack.pop();
            if(last !== map[cur] ) {
                return false;
            }
        } else {
            stack.push(cur);
        }
    }
    
    return stack.length === 0 ? true : false;
};

var r = isValid("([)]");
console.log('result:-', r);