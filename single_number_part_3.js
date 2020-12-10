function singleNumber(nums) {
    var output = [];
    nums.sort((a,b) => (a-b));
    var l = nums.length;
    if(l === 1 || nums[0] !== nums[1]) {
         output.push(nums[0]);
    }

    var i = 1;
    while(i<l) {
        if(nums[i-1] !== nums[i] && nums[i] !== nums[i+1]) {
            output.push(nums[i]);
        }
        i++;
    }

    return output;
};


var a = singleNumber([1,2,3,3,2,5]);

console.log("result:-", a);