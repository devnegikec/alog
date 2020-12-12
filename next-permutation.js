function nextPermutation = (nums) => {
    let i = nums.length - 2;
    // step 1:- find first index i, where value at i+1 is less then i

    while(i >= 0 && nums[i+1] <= nums[i]) {
        i--;
    }
}


nextPermutation([1,3,5,4,2]);