functin sortSquares(nums) {
    var n = nums.length;
    var k;
    for(k =0; k<n; k++) {
        if(nums[k]>= 0) {
            break;
        }
    }

    var i = k -1;
    var j = k;
    var ind = 0;

    var temp = [];

    while(i>=0; && j<n) {
        if(nums[i] * nums[i] < nums[j]*nums[j]) {
            temp[ind] = nums[i] * nums[i];
            i--;
        } else {
            temp[ind] = nums[j] * nums[j];
            j++;
        }
        ind++;
    }

    while (i >= 0) {
        temp[ind++] = nums[i] * nums[i];
        i--;
    }
    while (j < n) {
        temp[ind++] = nums[j] * nums[j];
        j++;
    }
}