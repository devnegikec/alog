function binarySearchIterative(node, target) {
    var left = 0;
    var right = node.length - 1;
    while (left <= right) {
        var mid = left + (right - left) / 2;
        if (node[mid] == target) {
            return true;
        } else if (node[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return false;
}

