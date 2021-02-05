class Node{
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
    }
    insertFirst(value){
        if(this.head)
            this.head=new Node(value,this.head);
        else
            this.head= new Node(value, null);
    }
    insertLast(value)
    {
        let node= new Node(value);
        if(this.head) {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        else{
            this.head = node;
        }
    }

    size(){
        let count=0;
        let node=this.head
        while(node){
            count++;
            node=node.next;
        }
        return count;
    }

    clear(){
        this.head=null
    }
    getLast(){
        let node=this.head;
        if(node) {
            while (node.next) {
                node = node.next
            }
        }
        return node;
    }

    getFirst(){
         return this.head;
    }

    printList(){
        let node=this.head;
        if(node){
            while(node){
                console.log(node);
                node=node.next;
            }
        }

    }

    removeFirst(){
        if(this.head)
            this.head=this.head.next;
        else
            return;
    }

    removeLast(){
        if(!this.head) return;
        if(!this.head.next){
            this.head = null;
            return;
        }

        let curNode=this.head;
        let nextNode=this.head.next;
        while(nextNode.next){
            curNode = nextNode.next;
            nextNode = curNode.next;
        }
        curNode.next=null;
    }

    getAt(index){
        let counter=0;
        let curNode=this.head;
        while(curNode)
        {
            if(counter===index)return curNode;
            curNode = curNode.next;
            counter++;
        }
        return null;
    }


    insertAt(value, index){
        if(!this.head){
            this.head = new Node(value);
            return
        }
        if(index===0){
            let node=this.head;
            this.head=new Node(value,node);
            return;
        }

        let prevNode = this.getAt(index-1);
        let newNode=new Node(value, prevNode.next);
         prevNode.next=newNode;
    }

    reverseList(){
        //solution based on algorithm of going through current list and putting
        // one item in a time in front of new reversed list

        if(!this.head || !this.head.next)
            return this.head;

        let curHead = this.head.next;
        let reversedList=this.head;
        this.head.next=null;

        while(curHead){
            let temp=curHead;
            curHead = curHead.next;
            temp.next=reversedList;
            reversedList=temp;
        }

        return reversedList;
    }
}


//const nodeOne = new Node(0);
const list = new LinkedList();
//list.head=nodeOne;
list.insertLast(1)
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
console.log(list);
//console.log(list.size());
//console.log(list.getLast());
list.insertFirst(88);
//console.log(list.getFirst())
list.printList()

