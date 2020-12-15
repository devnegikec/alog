/ This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	var result = [];
	helper(root, 0, result);
	return result;
}

function helper(root, sum, result) {
	// var result = [];
	if(root.left == null && root.right == null) {
		sum += root.value;
		result.push(sum);
		return;
	}
	
	if(root !== null) {
		sum +=root.value;
		if(root.left !== null) helper(root.left, sum, result);
		if(root.right !== null) helper(root.right, sum, result);
	}
	
	return;
}
