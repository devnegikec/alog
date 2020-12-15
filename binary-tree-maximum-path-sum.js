var maxPathSum = function(root) {
    var result = -Infinity;
    function maxPathSum_util(node) {
        if(root === null) {
            return 0;
        }

        var left = maxPathSum_util(node.left, result);
        var right = maxPathSum_util(node.right, result);

        var max_straight = Math.max(Math.max(left, right) + node.value, node.value);
        var max_caseVal = Math.max(max_straight, left + right + node.value);
        result = Math.max(max_caseVal, result);

    }
    
    maxPathSum_util(root);
    return result;
};