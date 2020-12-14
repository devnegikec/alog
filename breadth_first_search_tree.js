class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function traverse(root) {
    var result = [];
    if(root === null) {
        return result;
    }

    var queue = [];

    queue.push(root);

    while(queue.length > 0) {
        var levelSize = queue.length;
        var currentLevel = [];
        for(var i = 0; i< levelSize; i++) {
            currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(currentLevel);
    }

    return result;
}