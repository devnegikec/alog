function maxSumArray(arr) {
    if(arr.length <= 0) {
        return 0;
    }
    if(arr.length == 1) {
        return arr[0];
    }
    
    var first = arr[0];
    var second = Math.max(arr[1], first);
    var maxSum = second;

    for(var i = 2; i< arr.length; i++) {
        var cur = arr[i];
        maxSum = Math.max(first + cur, second);

        first = second;
        second = maxSum;
    }

    return maxSum;
}

console.log(maxSumArray([11,7,9,12,5,14]));
