// Given an integer array nums where every element appears three times
//  except for one, which appears exactly once. Find the single element 
// and return it.


// https://www.youtube.com/watch?v=cOFAmaMBVps


function singleNumber(nums) {
    // This problem can be translated to:
    //      For every bit position, we cancel any 3-time 1 and 3-time 0 to a 0
    //      Then we need to find equations that fits this: (assume we apply 3 1s)
    //               Zero 1      First 1     Second 1    Third 1
    // seenOnce        0            1           0           0
    // seenTwice       0            0           1           0
    var seenOnce = 0;
    var seenTwice = 0;
    
    for(var i = 0; i< nums.length; i++) {
        seenOnce = ~seenTwice & (seenOnce ^ nums[i]);
        seenTwice = ~seenOnce & (seenTwice ^ nums[i]);
    }
    
    return seenOnce;
}

var d = singleNumber([2,1,2,2]);
// console.log(d);
// ~0 & (0 ^ 2)



function singleNumberSorting(nums) {
    
    nums.sort((a,b) => (a-b));
    var l = nums.length;
    if(l === 1 || nums[0] !== nums[1]) {
        return nums[0]
    }

    if(nums[l-1] !== nums[l-2]) {
        return nums[l-1];
    }
    var i = 1;
    while(i<l) {
        if(nums[i-1] !== nums[i]) {
            return nums[i-1];
        }
        i +=3;
    }
}

var d = singleNumberSorting([2,3,5,6,1,2,1,1,2,5,6,6,5]);
console.log(d);