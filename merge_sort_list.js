const mergeSort = (head) => {
    if (head == null || head.next == null) {
        return head;
    }

    const mid = getMiddleAndSplitInhalf(head);

    const leftHalf = mergeSort(head);
    const rightHalf = mergeSort(mid);

    return merge(leftHalf, rightHalf);
}

const merge = (l1Pointer, l2Pointer) => {
    const dummyHead = new ListNode(0);
    let endofSortedList = dummyHead;

    while(l1Pointer != null && l2Pointer != null) {
        if(l1Pointer.val < l2Pointer.val) {
            endofSortedList.next = l1Pointer;
            l1Pointer = l1Pointer.next;
        } else {
            endofSortedList.next = l2Pointer;
            l2Pointer = l2Pointer.next;
        }
        endofSortedList = endofSortedList.next;
    }

    if(l1Pointer != null) {
        endofSortedList.next = l1Pointer;
    }
    
    if(l2Pointer != null) {
        endofSortedList.next = l2Pointer;
    }
    
    return dummyHead.next;
}

const getMiddleAndSplitInhalf = (head) => {
    let prev = null;
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    return slow;
}