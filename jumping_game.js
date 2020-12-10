var jump = function (nums) {
    var n = nums.length;
    var jumps = []; 
    var i, j; 

	if (n == 0 || nums[0] == 0) 
			return 0; // if first element is 0, 
		// end cannot be reached 

		jumps[0] = 0; 
		for (var i = 1; i < n; i++) { 
			jumps[i] = Infinity; 
			for (j = 0; j < i; j++) {
				if (i <= j + nums[j] && jumps[j] != Infinity) { 
					jumps[i] = Math.min(jumps[i], jumps[j] + 1); 
					break; 
				} 
			} 
		} 
		return jumps[n - 1]; 
}

var r = jump([2,3,1,1,4]);
console.log(r);