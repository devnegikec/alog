class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}




var serialize = function(root) {
   var res = "";
   return serializeHelper(root, res);
};

function serializeHelper(node, res) {
    if(node == null)
        return "X"
    var left = serialize(node.left);
    var right = serialize(node.right)

    return node.val +","+ left + "," + right;
}

var deserialize = function(str) {
    var queue = str.split(",");

    return deserializeHelper(queue);
}

function deserializeHelper(q) {
    var cur = q.shift();
    if(cur == "X") {
        return null;
    }
    var temp = new TreeNode(cur);
    temp.left = deserializeHelper(q);
    temp.right = deserializeHelper(q);
    return temp;
}

var a = new TreeNode(2);
var b = new TreeNode(7);
var c = new TreeNode(8);

var d = new TreeNode(11);
var e = new TreeNode(5);


var f = new TreeNode(1);
var g = new TreeNode(17);
var h = new TreeNode(21);
var i = new TreeNode(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
g.left = h;
e.left = i;

var result = serialize(a);
var t = deserialize(result);
console.log(result);
console.log(t);
``
/*
        2
   7         8
 11 5      1 17
   6         21  

*/


// var result =  traverse(a);


// console.log(result);