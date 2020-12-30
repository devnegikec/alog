
var hasPathSum = (node, targetSum) => {
    return helper(node, targetSum, [], []);
}

function helper(root, target, res, path) {
    if(root) {
        path.push(root.val);
        if(!root.left && !root.right && (target - root.val == 0)) {
            res.push([...path]);
        }

        helper(root.left, target-root.val, res, path);
        helper(root.right, target-root.val, res, path);
        path.pop();
    }

    return res;  
}