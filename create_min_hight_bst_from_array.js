class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length);
};

var helper = (arr, left, right) => {
    if(left >= right) 
        return null;
    
    var mid = left + Math.floor((right - left)/2);
    var cur = arr[mid];
    
    var node = new TreeNode(cur, null, null);
    
    node.left = helper(arr, left, mid);
    node.right= helper(arr, mid+1, right);
    
    return node;
    
}

var r = sortedArrayToBST([1,2,3,4,5,6,7]);
console.log(r);