class Graph{
    constructor() {
        this.nodes={};
        this.edges={};
    }

    addNode(identifier,value){
        if(!this.nodes[identifier])
            this.nodes[identifier]=value;
        else{
            throw new Error('Node does not exists!')
        }
    }


    addEdge(startNode, endNode){
        if(!this.nodes[startNode] || !this.nodes[endNode] ){
            throw new Error('Start or end node does not exists!')
        }
        //!this.edges[startNode].has(endNode)//if using set
        if(this.edges[startNode] && this.edges[startNode].indexOf(endNode)===-1){
            this.edges[startNode].push(endNode);
            //this.edges[startNode].add(endNode);
        }
        else{

            this.edges[startNode]=[endNode];
           // this.edges[startNode]=new Set([endNode]);
        }
    }

    hasEdge(startNode, endNode){
        if(!this.edges[startNode]) return false;

        return this.edges[startNode].indexOf(endNode)>-1;
    }

    getAllEdges(node){
        return this.edges[node];
    }

    removeNode(nodeIdentifier){
        this.nodes[nodeIdentifier]=undefined;
        //this.edges[nodeIdentifier]=undefined;

        // Reflect.deleteProperty(this.edges, nodeIdentifier);
        delete this.edges[nodeIdentifier];

        for(let key in this.edges){
            //this.edges[key].delete(nodeIdentifier) - if using set instead of loop;
            let i=0;
            for(let el of this.edges[key])

            {
                if(el===nodeIdentifier){
                    this.edges[el].splice(i,1);
                    break;
                }
                i++;
            }
        }


    }

    removeEdge(startNode, endNode){
        if(!this.edges[startNode]){
            throw new Error('Edge does not exist!');
        }
        const nodeIndex=this.edges[startNode].indexOf(endNode);

        if(nodeIndex===-1){
            throw new Error('Edge does not exist!');
        }
        this.edges[startNode].splice(nodeIndex,1);
    }
}


const graph = new Graph();

graph.addNode(1,'Max');
graph.addNode(2,'Manny');
graph.addNode(3,'Jules');

graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(3,2);

graph.hasEdge(1,2)


graph.removeEdge(1,3);
graph.removeNode(2);
