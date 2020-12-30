// Recursive Approach

const isValidBST = (root) => {
    return isNodeValueInRange(root, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

const isNodeValueInRange = (node, max, min) => {
    if(node == null) {
        return true;
    } else if(node.val <= min || node.val >= max) {
        return false;
    }
    return isNodeValueInRange(node.left, node.val, min) && isNodeValueInRange(node.right, max, node.val);
}




const isValidBST_BFS = (root) => {
    const queue = [];
    queue.push(
      new AugmentedTreeNode(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    );
  
    while (queue.length !== 0) {
      const augmentedNode = queue.shift();
  
      if (augmentedNode.node) {
        const nodeValue = augmentedNode.node.val;
        if (
          nodeValue <= augmentedNode.min ||
          nodeValue >= augmentedNode.max
        ) {
          return false;
        }
  
        queue.push(new AugmentedTreeNode(augmentedNode.node.left, augmentedNode.min, nodeValue));
        queue.push(new AugmentedTreeNode(augmentedNode.node.right, nodeValue, augmentedNode.max));
      }
    }
  
    return true;
  }
  
  class AugmentedTreeNode {
    constructor(node, min, max) {
      this.node = node;
      this.min = min;
      this.max = max;
    }
  }
