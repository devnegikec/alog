var isSymmetric = function(root) {
    if(root == null) {
        return true;
    }
    
    return checkSymmetry(root.left, root.right);
};

var checkSymmetry = (leftRoot, rightRoot) => {
    if (leftRoot == null && rightRoot == null) return true; // If both sub trees are empty
    if (leftRoot == null || rightRoot == null) return false; // If only one of the sub trees are empty
    if (leftRoot.val !== rightRoot.val) return false; 
    
    if(leftRoot != null && rightRoot != null) {
        return checkSymmetry(leftRoot.left, rightRoot.right) && checkSymmetry(leftRoot.right, rightRoot.left);
    }
}



var isSymmetric_Iterative = function(root) {
    // BFS with 2 queues
    if(!root) return true;
    // it is not recommended to use array as a queue
    let q1 = [], q2 = [];
    
    q1.push(root.left);
    q2.push(root.right);
    
    while(q1.length > 0 && q2.length > 0){
        let node1 = q1.shift();
        let node2 = q2.shift();
        // all exhausted
        if(!node1 && !node2) continue;
        // counterpart does not exists
        if(!node1 || !node2) return false;
        // mismatch
        if(node1.val !== node2.val) return false;
        
        q1.push(node1.left);
        q2.push(node2.right);
        
        q1.push(node1.right);
        q2.push(node2.left);
    }
    // if both array exhausted, return true
    return q1.length === 0 && q2.length === 0;
    
}
