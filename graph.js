class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  addEdge2(v1, v2) {
    this.adjacencyList[v1].push(v2);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      //console.log(result);
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// console.log(graph);
console.log(graph.breadthFirst("A"));

// graph.addVertex("you");
// graph.addVertex("bob");
// graph.addVertex("alice");
// graph.addVertex("chaire");
// graph.addVertex("anuj");
// graph.addVertex("peggy");
// graph.addVertex("mthom");
// graph.addVertex("jonny");

// graph.addEdge2("you", "alice");
// graph.addEdge2("you", "bob");
// graph.addEdge2("you", "chaire");
// graph.addEdge2("bob", "anuj");
// graph.addEdge2("bob", "peggy");
// graph.addEdge2("alice", "peggy");
// graph.addEdge2("chaire", "mthom");
// graph.addEdge2("chaire", "jonny");

//console.log(graph);

// graph.addVertex("由比ヶ浜");
// graph.addVertex("長谷");
// graph.addVertex("和田塚");
// graph.addVertex("七里");
// graph.addVertex("稲村");

// graph.addEdge("由比ヶ浜", "和田塚");
// graph.addEdge("長谷", "由比ヶ浜");
// graph.addEdge("長谷", "稲村");
// graph.addEdge("稲村", "七里");

// console.log(graph.breadthFirst("和田塚"));

//        和田塚
//             \
//      長谷 ---   由比ヶ浜
//       |
//       稲村
//        \
//          七里

// graph.removeEdge("dalas", "tokyo");
// graph.removeEdge("dalas", "aspen");
//console.log(graph.depthFirstRecursive("A"));

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let pq = new PriorityQueue();

pq.enqueue("A", 3);
pq.enqueue("B", 4);
pq.enqueue("C", 7);
pq.enqueue("D", 20);

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra2(start, finish) {
    const node = new PriorityQueue();
    const distance = {};
    const previous = {};

    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        node.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        node.enqueue(vertex, Infinity);
      }
    }

    while (node.values.length) {
      smallest = node.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let cansdidate = distance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (cansdidate < distance[neighbor]) {
            const element = object[key];
          }
        }
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distance[nextNeighbor]) {
            distance[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            node.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
  Dijkstra(start, finish) {
    const node = new PriorityQueue();
    const distance = {};
    const previous = {};

    let path = [];
    let smallest;

    //set inital state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        node.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        node.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (node.values.length) {
      smallest = node.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distance[nextNeighbor]) {
            distance[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            node.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

//console.log(wg.Dijkstra("A", "E"));
