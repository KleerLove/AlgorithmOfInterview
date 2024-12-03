var removeElements = function(head, val) {
    const dummy = new ListNode(0, head);
    let cur = dummy;
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return dummy.next;
};