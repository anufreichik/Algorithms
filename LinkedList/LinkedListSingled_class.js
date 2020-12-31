class Node{
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }
    insertFirst(data){
        if(this.head)
            this.head=new Node(data,this.head);
        else
            this.head = new Node(data);

    }
    size(){
        let counter=0;
        let curNode = this.head;
       while(curNode){
           counter++;
           curNode = curNode.next;
       }
       return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
       if(!this.head) return null;
       let curNode=this.head;
       while(curNode){
           if(curNode.next)
               curNode = curNode.next;
           else
               return curNode;
       }
    }
    clearList(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head) return;
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head) return;

        if(!this.head.next) {
            this.head=null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous=node;
            node=node.next;
        }
        previous.next = null;
    }

    insertLast(data){
        let node= new Node(data);
        if(this.head)
        {
            let lastNode = this.getLast();
            lastNode.next = node;
        }
        {
           this.head=node;
        }
    }

    getAt(index){
        //if(!this.head) return null;
        let counter=0;
        let curNode = this.head;
        while(curNode)
        {
           if(counter===index)  return curNode;
           curNode = curNode.next;
           counter++;
        }
        return null;
    }

    removeAt(index){
        if(!this.head) return;
        if(index===0){
            this.head = this.head.next;
            return;
        }
        let prevNode = this.getAt(index-1);
        if(!prevNode || !prevNode.next) return;
        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index){

        if(!this.head) {
            this.head =  new Node(data);
            return;
        }

        if(index===0){
            this.head = new Node(data, this.head);
            return;
        }
        let prev = this.getAt(index-1) || this.getLast();
        let newNode = new Node(data, prev.next);
        prev.next=newNode;

        // let prev = this.getAt(index-1);
        // if(prev)
        // {
        //     newNode.next = prev.next;
        //     prev.next=newNode;
        // }
        // else if(index===0)
        //     this.insertFirst(data);
        // else
        //     this.insertLast(data);

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }
}


const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);

