/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const aLength = getLengthOfList(headA);
    const bLength = getLengthOfList(headB);
    if(aLength > bLength){
        for(let i = 0; i < aLength - bLength; i++){
            headA = headA.next;
        }
    }else{
        for(let i = 0; i < bLength - aLength; i++){
            headB = headB.next;
        }
    }
    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

function getLengthOfList(head){
    let cur = head;
    let length = 0;
    while(cur){
        cur = cur.next;
        length++;
    }
    return length;
}