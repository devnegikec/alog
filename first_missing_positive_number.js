function firstMissingPositive(nums) {
    var size = nums.length;
    /**
   * Without using extra space, we can swap the current
   * position value to the correct one and add a boolean
   * flag `true` to know if it's in the correct position.
   * 
   * If the number to be changed is outside the range of
   * the array, we can flag it to `false`. 
   */
    for (var i = 0; i<size; i++){
        let num = nums[i];
        if(typeof num === "number") {
            swap(nums, i , num-1);
        }
    }
    /**
   * We check for the first `false` value.
   * If we found one, we sum that position + 1
   * to get the value of the missing number.
   */
    for(var j=0; j < size; j++) {
        var n = nums[j];
        if(n === false) {
            return j+1
        }
    }

    return size + 1;
}

function swap(arr, currPos, correctPos){
    var l = arr.length;
    var num = arr[currPos];
    var numToMove = arr[correctPos];
    // If number is in correctPos,
    // then we don't need to do anything
    if(num === currPos+1) {
        return;
    }

    // If number outbounds the size of the array
    // or we already have a correct position number
    // then we can safely flag it
    if(num > l || num <= 0 || arr[correctPos] === true) {
        return arr[currPos] = false;
    }

    arr[correctPos] = true;
    arr[currPos] = numToMove;

    // We recursively check for the current number 
    // and start the swap procedure once again.
    if(numToMove !== false && numToMove !== currPos+1) {
        swap(arr, currPos, numToMove -1);
    }
}