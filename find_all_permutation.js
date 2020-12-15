
var permute_slow = function(nums) {
    let result = [];
    getPermute(nums, 0);

    function getPermute(nums, left) {
        if(left === nums.length-1) {
            result.push([...nums]);
        } else {
            for(let i = left; i< nums.length; i++) {
                [nums[left], nums[i]] = [nums[i], nums[left]];
                getPermute(nums, left + 1);
                [nums[left], nums[i]] = [nums[i], nums[left]];
            }
        }
    }
    return result;
}

console.log(permute([1,2,3]));


