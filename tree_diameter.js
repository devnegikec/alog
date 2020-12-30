var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0;
    var diameter = 0;
    
    function helper(node) {
        if(node == null)     
            return 0;
        
        var leftD = helper(node.left);
        var rightD = helper(node.right);
        
        diameter = Math.max(diameter, leftD + rightD);
        
        return Math.max(leftD, rightD) + 1;
    }
    
    return diameter;
};


var diameterOfBinaryTree = function(root) {
    let diameter = 0
    if(!root) return 0
    function computeDiameter(root) {
        if(!root) {
            return 0
        }
        const d1 = computeDiameter(root.left)
        const d2 = computeDiameter(root.right)
        diameter = Math.max(diameter, d1 + d2)
        return Math.max(d1, d2) + 1
    }
    computeDiameter(root)
    return diameter
};