function twoNubmerSum(array, targetSum) {
    const nums = {};
    for(const num of array) {
        const potentialMatch = targetSum - num;
        if(potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

function twoNumberSum_sorting(array, targetSum) {
    array.sort((a,b) => a-b);
    let left = 0, right = array.length -1;
    while(left < right) {
        const sum = array[left] + array[right];
        if(sum === targetSum) {
            return [array[left], array[right]];
        } else if(sum < targetSum) {
            left++;
        } else if(sum > targetSum) {
            right--;
        }
    }
    return [];
}