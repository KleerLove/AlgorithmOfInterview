var removeNthFromEnd = function (head, n) {
    // 创建哨兵节点，简化解题逻辑
    let dummyHead = new ListNode(0, head);
    let fast = dummyHead;
    let slow = dummyHead;
    while (n--) fast = fast.next;
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummyHead.next;
};