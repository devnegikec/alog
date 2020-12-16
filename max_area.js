function Stack() {
    this.vals = [];
}

Stack.prototype.pop = function () {
    return this.vals.pop();
}

Stack.prototype.peek = function () {
    return this.vals[this.vals.length - 1];
}

Stack.prototype.add = function (val) {
    this.vals.push(val)
}
var largestRectangleArea = function (heights) {
    const stack = new Stack();
    stack.add(-1);
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.peek() !== -1 && heights[stack.peek()] >= heights[i]) {
            maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack.peek() - 1))
        }
        stack.add(i);
    }

    while (stack.peek() !== -1) {
        maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - stack.peek() - 1));
    }

    return maxArea;
};

console.log(largestRectangleArea([2,1,2,3,1]));
