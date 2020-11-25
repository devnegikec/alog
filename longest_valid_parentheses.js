var longestValidParentheses = function(str) {
    const stack = [-1];
    let max = 0;
    
    for (let i = 0; i < str.length; i++) {
        const top = stack[stack.length -1];

        if(str[top] === '(' && str[i] === ')') {
            stack.pop();
            const newTop = stack[stack.length -1];
            max = Math.max(i -newTop, max);
        } else {
            stack.push(i);
        }
    }

    return max;
}