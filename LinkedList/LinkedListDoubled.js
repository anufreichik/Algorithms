function LinkedList(){
    this.head = null;
    this.tail=null;
}

function Node(value, next, prev){
    this.value = value;
    this.next=next;
    this.prev = prev;
}
let ll = new LinkedList();
// let node2=new Node(100, null,node1)
// let node1=new Node(100, node2,null);

LinkedList.prototype.addToHead=function(value){
    let newHeadNode = new Node(value,this.head, null);
    if(!this.head){
        this.tail = newHeadNode;
    }
    else{
        this.head.prev = newHeadNode;
    }
    this.head = newHeadNode;
}
LinkedList.prototype.addToTail=function(value){
    let newTailNode = new Node(value,null, this.tail);
    if(this.tail) this.tail.next =newTailNode;
    else this.head = newTailNode;

    this.tail = newTailNode;
}

LinkedList.prototype.removeHead=function(){
    if(!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail =null;
    return val;
}
LinkedList.prototype.removeTail=function(){
if(!this.tail)return null;
let val = this.tail.value;
this.tail = this.tail.prev;
if(this.tail) this.tail.next=null;
else this.head=null;
return val;
}

LinkedList.prototype.search=function(searchValue){
    let curNode=this.head;

    while(curNode){
        if(curNode.value===searchValue) return curNode;
        curNode=curNode.next;
    }
    return null;
}

LinkedList.prototype.indexOf=function(value){
    let curNode = this.head;
    let resultArr=[];
    let curInd=0;
    while(curNode)
    {
        if(curNode.value===value)
        {
            resultArr.push(curInd);
        }
        curNode=curNode.next;
        curInd++;
    }

    return resultArr;
}



ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);
ll.removeHead();
ll.removeTail();
ll.search(10);
ll.indexOf(10);



