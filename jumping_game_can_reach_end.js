var canJump = function(nums) {
    let goal = nums.length - 1, idx = nums.length - 1;
    while (0 <= --idx) {
      if (goal - idx <= nums[idx]) {
        goal = idx;
      } 
    }
    return goal === 0;
  };
  
  
  var r = canJump([3,2,1,0,4]);
  console.log(r);