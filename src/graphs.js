class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  removeNode(node) {
    // Remove the node from all edge lists
    Object.values(this.adjList).forEach(edgeList => {
      const edgeListIndex = edgeList.indexOf(node);
      if (edgeListIndex > -1) {
        edgeList.splice(edgeListIndex, 1);
      }
    });

    // Remove the node from the node list
    const nodeListIndex = this.nodes.indexOf(node);
    if (nodeListIndex > -1) {
      delete this.adjList[node];
      return this.nodes.splice(nodeListIndex, 1);
    }

    return false;
  }

  depthFirstTraversal(startingNode) {
    let result = [];
    let nodeStack = [];
    let visitedArr = [];

    nodeStack.push(startingNode);
    visitedArr[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.pop();
      const neighbors = this.adjList[current];
      result.push(current);

      neighbors.forEach(neighbor => {
        if (!visitedArr[neighbor]) {
          nodeStack.push(neighbor);
          visitedArr[neighbor] = true;
        }
      });
    }
    return result;
  }
}

let jamil = new Graph();
jamil.addNode(1);
jamil.addNode(2);
jamil.addNode(3);
jamil.addNode(4);
jamil.addNode(5);
jamil.addNode(99);
jamil.addNode(6);
jamil.addNode(7);
jamil.addNode(8);
jamil.addNode(9);
jamil.addEdge(1, 2);
jamil.addEdge(1, 3);
jamil.addEdge(1, 4);
jamil.addEdge(1, 5);
jamil.addEdge(1, 6);
jamil.addEdge(6, 7);
jamil.addEdge(6, 8);
jamil.addEdge(6, 9);
jamil.addEdge(99, 4);

console.log('before delete', jamil);
console.log('DFS', jamil.depthFirstTraversal(1));
// jamil.removeNode(3);
// console.log('after delete', jamil);
// jamil.addNode(3);

export default Graph;