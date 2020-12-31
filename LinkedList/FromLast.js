function fromLast(list, n){
    //return the element n spaces from the last node in the list. dont use size
    //starting by moving fast n element ahead, then moving one in a time till fast reach end

    let slow=list.head;
    let fast = list.head;

    for(let i=0;i<n;i++)
    {
        fast = fast.next;
    }

    while(fast.next!==null){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}