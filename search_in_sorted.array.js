var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(target === nums[mid]) {
            return mid;
        }

        if(target > nums[mid]) {
            if(target >= nums[left] && nums[left] > nums[mid] ) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(target < nums[left] && nums[right] < nums[mid]) {
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
    }
    return -1;
}

var r = search([3,4,5,6,7,8,9,1,2], 9);
console.log(r);