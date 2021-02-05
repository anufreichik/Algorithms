function BST(value){
    this.value = value;
    this.left=null;
    this.right=null;
}

let bst = new BST(50);
BST.prototype.insert= function(value){
    if(value <= this.value)
    {
       if(!this.left) this.left = new BST(value);
       else this.left.insert(value);
    }
    else {
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}

BST.prototype.contains = function(value){
    if(value===this.value)return true;
    else if(value<this.value){
        if (!this.left) return false;
        else {
            return this.left.contains(value);
        }
    }
    else if(value>this.value){
        if(!this.right.value)return false;
        else return this.right.contains(value);
    }

}

BST.prototype.depthFirstTraversal = function(iteratorFunc){
    if(this.left) this.left.depthFirstTraversal(iteratorFunc);
    iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc);
}

function log(value){
    console.log(value);
}
bst.insert(40);
bst.insert(30);
bst.insert(22);
bst.insert(12);
bst.depthFirstTraversal(log);


bst.contains(50);
