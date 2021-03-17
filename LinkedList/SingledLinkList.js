function LinkedList(){
    this.head=null;
}
function Node(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.addToHead = function(value) {
    if(this.head)
        this.head=new Node(value,this.head);
    else
        this.head= new Node(value, null);
};
