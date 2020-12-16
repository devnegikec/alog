function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var partition = function(head, x) {
    let before = beforeHead = new ListNode(0), after = afterHead = new ListNode(0);
    
    while(head) {
        if(head.val < x) before = before.next = head;
        else after = after.next = head;
        head = head.next;
    } 
    
    after.next = null;
    before.next = afterHead.next;
    
    return beforeHead.next;
 
};

var partition_array = function(head, x ) {
    let lowerArr = []
    let higherArr = []
    let curr = head

    while (curr !== null) {
        if (curr.val < x) {
            lowerArr.push(curr)
        } else {
            higherArr.push(curr)
        }

        curr = curr.next
    }

    let finalArr = lowerArr.concat(higherArr),
        newHead = finalArr[0] || null, 
        last = finalArr.length - 1

    for (let i = 0; i < last + 1; i++) {
        let node = finalArr[i]
        let nextNode = finalArr[i+ 1]
        if (i === last) {
            node.next = null
        } else {
            node.next = nextNode
        }
    }

    return newHead
}

var l1 = new ListNode(1, null);
var a = new ListNode(4, null);
var b = new ListNode(3, null);
var c = new ListNode(2, null);
var d = new ListNode(5, null);
var e = new ListNode(2, null);

l1.next = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;

var r = partition(l1, 3)
// console.log(r)

printNode(r);

function printNode(r) {
    if(r) {
        console.log(r.val);
        printNode(r.next);
    }
}