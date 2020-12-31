class Node{
    constructor(data) {
        this.data = data;
        this.children=[];
    }

    add(data){
         this.children.push(new Node(data));
    }
    remove(data){
      this.children= this.children.filter(el=>el.data!==data);
    }
}

class Tree{
    constructor() {
        this.root = null;
    }
//Breadth first solution
    //create array
    //stick root into array
    //loop while something in array
    //remove first element, take his children and push it to the END array

    traverseBF(fn){
        let arr=[this.root];
        while(arr.length>0){
            let node =  arr.shift();
            let children = node.children;
            arr.push(...children);
            fn(node);
        }
    }

    //Depth First Traversal
    //the same as as breadth but push at the beginning of array

    traverseDF(fn){
        let arr=[this.root];
        while(arr.length)
        {
            let node=arr.shift();
            let children = node.children;
            arr.unshift(...children);
            fn(node);
        }
    }
    levelWidth(root){
        let counters=[0];
        let arr=[this.root, 's'];
        while(arr.length>1)
        {
            let node = arr.shift();
            if(node==='s'){
                counters.push(0);
                arr.push('s')
            }
            else{
                let children = node.children;
                arr.push(...children);
                counters[counters.length-1]++;

            }

        }
        return counters;
    }
}
