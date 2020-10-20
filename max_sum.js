function max_sum(k, arr) {
	let maxSum = 0,
		windowSum = 0,
		start = 0;

	for(let end = 0; end < arr.length; end++ ) {
		windowSum += arr[end];

		if( end >= k-1) {
			maxSum = Math.max(maxSum, windowSum);
			windowSum  -= arr[start];
			start += 1;
		}
	}
	return maxSum;
}

var r = max_sum(3, [2,1,5,1,3,2]);
console.log(r);
var r1 = max_sum(2, [2,3,4,1,5]);
console.log(r1);