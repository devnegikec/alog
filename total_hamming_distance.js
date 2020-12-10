// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Now your job is to find the total Hamming distance between all pairs of the given numbers.

// Example:
// Input: 4, 14, 2

// Output: 6

var totalHammingDistance = function(nums) {
    var l = nums.length;
    var total = 0;
    for(var i = 0; i< 32; i++) {
        var ones = 0;
        for(var j =0; j< l; j++) {
            ones += (nums[j] >> i) & 1;
        }

        total += ones * (l - ones);
    }
    return total;
};


var r = totalHammingDistance([2,14,4]);
console.log(r);
