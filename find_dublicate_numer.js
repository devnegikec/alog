function findDuplicate (nums) {
    if(nums.length === 0) {
        return 0;
    }

    var slow = nums[0];
    var fast = nums[0];
    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while(slow !== fast);

    fast = num[0];

    while(fast !== slow ) {
        fast = nums[fast];
        slow = nums[slow];
    }

    retun fast;

}