function circular(list) {
    if(!list.head) return true;
    if(!list.head.next) return true;

    let fast = list.head.next.next;
    let slow = list.head.next;

    while(fast!==slow && fast.next!==null)
    {
        fast = fast.next.next;
        slow = slow.next;
        if(!fast.next) return false
        if(fast===slow || !fast.next) return true;
    }
}


function circular1(list) {
   let slow = list.head;
   let fast = list.head;

   while(fast.next && fast.next.next)
   {
       slow = slow.next;
       fast = fast.next.next;

       if(slow===fast) return true;
   }
   return false;
}

