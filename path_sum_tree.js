/**
 * 
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf
 * path such that adding up all the values along the path equals the
 *  given sum.
 *
 */
var hasPathSum = function(root, sum) {
    return hasPathSumHelper(root, sum, 0)
};

function hasPathSumHelper(root, sum, check) {
    if(root === null) return false
    
    check += root.val
    
    if(root.left === null && root.right === null && check === sum) return true
    
    let left = hasPathSumHelper(root.left, sum, check)
    let right = hasPathSumHelper(root.right, sum, check)
    
    return left === true || right === true
}


var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (sum - root.val == 0 && !root.left && !root.right) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};