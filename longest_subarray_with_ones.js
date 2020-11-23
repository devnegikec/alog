
function longest_subarray_with_ones (arr, k) {
    let start = 0,
        maxLegnth = 0,
        maxOncsCount = 0;
    
    for(let end = 0; end < arr.length; end++) {
        if(arr[end] === 1) {
            maxOncsCount += 1;
        }

        if((end - start + 1 - maxOncsCount) > k ) {
            if(arr[start] === 1) {
                maxOncsCount -= 1;
            }
            start += 1;
        }
        maxLegnth = Math.max(maxLegnth, (end - start + 1));
    }

    return maxLegnth;
}

console.log(longest_subarray_with_ones([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(longest_subarray_with_ones([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
