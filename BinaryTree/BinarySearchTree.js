class Node{
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null
    }
  insert(data){
        if (data<this.data && this.left) {
            this.left.insert(data);
        }
        else if(data<this.data && !this.left) {
            this.data.left = new Node(data);
        }
        else if(data>this.data && this.right){
            this.right.insert(data);
        }
        else if(data>this.data && !this.right){
            this.data.right = new Node(data);
        }
  }

  contains(data){
       if(data>this.data && this.right) this.right.contains(data);
       else if(data>this.data && !this.right) return null;
       else if(data<this.data && this.left) this.left.contains(data);
       else if(data<this.data &&  !this.left) return null;
       else return this;
  }
}