var reverseKGroup = function(head, k) {
    if (!head || k == 1 ) {
        return head;
    }

    let fake = new ListNode(-1);
    fake.next = head;
    let pre = fake;
    let i = 0;
    let p = head;


    while( p !== null) {
        i++;
        if(i%k === 0) {
            pre = reverse(pre, p.next);
            p = pre.next;
        } else {
            p = p.next;
        }
    }
    return fake.next;
}

var reverse = function (pre, next) {
    let last = pre.next;
    let curr = last.next;
    while (curr !== next) {
        last.next = curr.next;
        curr.next = pre.next;
        pre.next = curr;
        curr = last.next;
    }
    return last;
}
