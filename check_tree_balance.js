/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return checkBalanced(root).isBalanced;
};

var checkBalanced = (root) => {
    if(root == null) {
        return new BalanceStatusWithHeight(true, -1);
    }

    const leftResult = checkBalanced(root.left);
    if(!leftResult.isBalanced) {
        return leftResult;
    }

    const rightResult = checkBalanced(root.right);
    if(!rightResult.isBalanced) {
        return rightResult;
    }

    const subTressAreBalanced = Math.abs(leftResult.height -rightResult.height) <= 1;
    const height = Math.max(leftResult.height, rightResult.height) + 1;

    return new BalanceStatusWithHeight(subTressAreBalanced, height);
}


class BalanceStatusWithHeight {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}