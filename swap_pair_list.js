var swapPairs = function(head) {
    if (head == null || head.next == null) 
    return head;

    var cur = head;
    while(cur) {
      var temp = cur.val;
      if(cur.next) {
        cur.val = cur.next.val
        cur.next.val = temp;
        cur = cur.next.next;
      } else {
          cur = cur.next;
      }
    }
};