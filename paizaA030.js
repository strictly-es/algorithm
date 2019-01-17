class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
  }

  countStaff(start) {
    const queue = [start];
    const visited = {};
    let currentVertex;
    let count = 0;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      });
    }
    return count;
  }
}

//A030 上司と部下
let lines = ["6", "3 1 1 1 3"];
let lines = ["10", "4 6 1 4 1 1 5 3 4"];

let data = [];

for (let i = 0; i < lines.length; i++) {
  let arr = lines[i].split(" ");
  data.push(arr.filter(val => val !== " "));
}

let graph = new Graph();
for (let i = 1; i <= lines[0]; i++) {
  graph.addVertex(i);
}

//console.log(data2[1]);

let member = 1;
data[1].forEach(val => {
  member++;
  graph.addEdge(val, member);
});

//console.log(graph2);

for (let i = 1; i <= lines[0]; i++) {
  console.log(graph.countStaff(i));
}
