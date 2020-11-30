/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsSlow = function(lists) {
    let i = 0;
    let result = null;

    lists.forEach(l => {
        result = mergeList(result, l);
    });

    return result;
};


var mergeList = (l1, l2) => {
    if(l1 == null)
        return l2;
    if(l2 == null)
        return l1;

    if(l1.val < l2.val) {
        l1.next = mergeList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeList(l1, l2.next);
        return l2;
    }

}


var mergeKListsFast = function(lists) {
    let number = [];

    lists.map((node) => {
        while(node  !== null) {
            if(node) {
                numberArr.push(node.val);
                node = node.next;
            }
        }
    });

    if(numberArr.length === 0) 
        return null;
    
    numberArr.sort((a,b) => a-b);

    let node = new ListNode(numberArr[0]);

    let current = node;
    numberArr.forEach((number, index) => {
        if(index !== 0) {
            current.next = new ListNode(number);
            current = current.next;
        }
    });

    return node;
}