class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function findClosestValueInBst(tree, target) {
    // Write your code here.
      return findValueHelper(tree, target, tree.value);
  }


function findValueHelper(tree, target, closest) {
    if(tree === null) {
        return closest;
    }
    if(Math.abs(target - closest) > Math.abs(target -tree.value)) {
        closest = tree.value;
    }

    if(target < tree.value) {
        return findClosestValueInBst(tree.left, target, closest);
    } else if(target > tree.value) {
        return findClosestValueInBst(tree.right, target, closest);
    } else {
        return closest;
    }
}