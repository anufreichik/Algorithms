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

}

bst.insert(30);
bst.insert(70);
bst.contains(50);
