var fourSum = function(nums, target) {
    nums.sort((a,b) => a -b);
    const length = nums.length;
    const output = [];

    if(length < 4) return [];

    for(let i = 0; i< length -3; i++) {
        // if(nums[i] > target) break;

        if(i === 0 || (nums[i] > nums[i-1])) {
            let result = target - nums[i];
            for (let j = i+1; j < length - 2; j++) {
                // if(nums[j] > result) break;

                if(j === i + 1 || nums[j] > nums[j-1]) {
                    let newTarget = result - nums[j];

                    let start = j + 1;
                    let end = length - 1;
                    
                    while(start < end ) {
                        if(nums[start] + nums[end] === newTarget) {
                            output.push([nums[i], nums[j], nums[start], nums[end]]);
                            start++;
                            end--;
                            while(start < end && nums[end + 1] === nums[end] ) end--;
                            while(start < end && nums[start-1] === nums[start]) start++;                            
                        } else if(nums[start] + nums[end] > newTarget) {
                            end--;
                        } else {
                            start++;
                        }
                    }
                }
            }
        }

       
    }
    
    return output;
};


var r = fourSum([1,-2,-5,-4,-3,3,3,5], -11);
console.log(r);