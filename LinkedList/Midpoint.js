function midpoint(list){
    //return the 'middle' node of a linked list.
    //if the list has an even number of elements, return
    //the node at the end of the first half of the list.
    //do not use a counter variable, do not retrieve the size of the list and
    //only iterate through the list one time.
    //const l = new LinkedList();
    //l.insertLast('a'); l.insertLat('b');l.insertLast('c');
    //midpoint(l); return {date:'b'}

    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
  return slow;
}