var threeSumClosest = function(nums, target) {
    if (!nums || nums.length < 3) return;

    const arr = nums.sort((a, b) => a - b);

    let result = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let small = i + 1;
        let large = arr.length - 1;

        while (small < large) {
            const sum = arr[i] + arr[small] + arr[large];
            if (sum == target) {
                return target;
            } else if (sum > target) {
                large--;
            } else {
                small++;
            }
            if (Math.abs(result - target) > Math.abs(sum - target)) {
                result = sum;
            }
        }
    }

    return result;
};


var r = threeSumClosest([-1,2,1,-4], 1);
console.log(r);
