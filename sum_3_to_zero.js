/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => (a-b));
    const length = nums.length;
    const output = [];

    if (length < 3 ) return output;

    for (let i = 0; i< length -2; i++) {
        if(nums[i] >0 ) break;

        if(i === 0 || (nums[i] > nums[i-1])) {
            let target = 0 - nums[i];
            let start = i + 1;
            let end = length -1;

            while(start < end) {
                if(nums[start] + nums[end] === target){
                   output.push([nums[i], nums[start], nums[end]]) ;
                   start++;
                   end--;
                   while(start < end && nums[end + 1] === nums[end]) end--;
                   while(start < end && nums[start -1] === nums[start]) start++;
                } else if(nums[start] + nums[end] > target) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    return output;
}; 

var result = threeSum([-1,0,1,2,-1,-4, 1,2]);
console.log(result);