function smallest_sub(s, arr) {
    let windowSum = 0,
        minLength = Infinity,
        start = 0;

    for(let end = 0; end < arr.length; end++) {
        windowSum += arr[end];

        if(windowSum > s) {
            minLength = Math.min(minLength, end - start + 1);
            windowSum -= arr[start];
            start += 1;
        }
    }

    if(minLength === Infinity) {
        return 0;
    }
    return minLength;
}

var r = smallest_sub(7, [2,1,5,2,3,2]);
console.log(r);
var r1 = smallest_sub(7, [2,1,5,2,8]);
console.log(r1);
var r2 = smallest_sub(8, [3,4,1,1,6]);
console.log(r2);