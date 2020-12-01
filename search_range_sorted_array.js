/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    let result = [-1, -1];
    let left = 0;
    let right = nums.length -1;

    if(target < nums[left] || target > nums[right]) {
        return result;
    }

    let low, high;

    while(left  <= right) {
        let mid = Math.floor((left + (right -left)/2));

        if(nums[mid] == target) {
            result = [nums[mid], nums[mid]];
            low = mid;
            high = mid;
        }
        if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (result[0] === -1) {
        return result;
    }

    while(true) {
        if(nums[high +1] !== target && nums[low -1] !== target) {
            break;
        }
        if(nums[high + 1] === target) {
            high++;
        }
        if(nums[low - 1] === target) {
            low--;
        }
    }

    return result = [low, high];
}