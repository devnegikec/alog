var mergeTwoListsSlow = function (l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    let tempHead = new ListNode(0);

    let l3 = tempHead;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }

        l3 = l3.next;
    }

    l3.next = l1 || l2;

    return tempHead.next;
}


var mergeTwoListsFast = function(l1, l2) {

        // either list empty
        if(l1 == null){
            return l2;
        } else if(l2 == null){
            return l1;
        }
        
        var head = new ListNode();
        var pointer = new ListNode();
        
        // head initialization
        if(l1.val <= l2.val){
            pointer = l1;
            l1 = l1.next;
        } else{
            pointer = l2;
            l2 = l2.next;
        }
        
        head = pointer;
        
        // loop until either list is empty
        while(l1 != null && l2 != null){
            
            // set pointer next val to lesser node of both & increment list
            if(l1.val <= l2.val){
                pointer.next = l1;
                l1 = l1.next;
            } else {
                pointer.next = l2;
                l2 = l2.next;
            }
            
            pointer = pointer.next;
        }
        
        // end conditions - set remaining list of the longer list to pointer's next
        if(l1 == null){
            pointer.next =l2;
        } else {
            pointer.next = l1;
        }
        
        return head;
}