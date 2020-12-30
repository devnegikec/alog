class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


var hasPathSum = (node, targetSum) => {
    var map = new Map();
    map.set(0,1);
    return helper(node, targetSum, map, 0);
}

function helper(root, target, map, runningSum) {
   if(root == null) return 0;
   runningSum += root.val;
   var output = [];

   var isInMap = map.get(runningSum - target);
   if(typeof isInMap !== "undefined" ) {
       output.push(root.val);
   }

   console.log(output);
   var count = map.get(runningSum - target) || 0;
   map.set(runningSum, (map.get(runningSum) || 0) + 1);
   count += helper(root.left, target, map, runningSum) + helper(root.right, target, map, runningSum);
   map.set(runningSum, map.get(runningSum) - 1); // backtracking to clear the previous branch sum
   return count;
}