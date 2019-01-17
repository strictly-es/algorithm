//A007 友達をたどる
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

  hasEdge(start, end) {
    const queue = [start];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();

      for (let i = 0; i < this.adjacencyList[currentVertex].length; i++) {
        let neighbor = this.adjacencyList[currentVertex][i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          if (neighbor == end) return "yes";
        }
      }
    }
    return "no";
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

let lines = [
  "5 8",
  "0 1 2",
  "0 1 3",
  "1 3 2",
  "1 3 4",
  "0 4 5",
  "1 3 5",
  "0 1 4",
  "1 3 5"
];
let lines2 = [
  "4 9",
  "0 3 1",
  "1 2 4",
  "1 1 2",
  "1 1 3",
  "1 3 2",
  "0 1 4",
  "1 2 3",
  "0 1 2",
  "1 2 4"
];

let lines3 = [
  "10 16",
  "1 1 10",
  "0 9 7",
  "1 2 7",
  "0 6 8",
  "0 5 3",
  "0 2 9",
  "1 3 8",
  "0 8 4",
  "0 10 5",
  "1 5 7",
  "1 3 4",
  "1 9 10",
  "0 4 1",
  "0 2 6",
  "0 10 6",
  "1 8 3"
];

let data = [];
for (let i = 1; i < lines.length; i++) {
  let arr = lines[i].split(" ");
  data.push(arr.filter(val => val !== " "));
}
//console.log(data);

let graph = new Graph();
for (let i = 1; i <= lines[0].split(" ")[0]; i++) {
  graph.addVertex(i);
}

for (let i = 0; i < data.length; i++) {
  //console.log(data[i][0]);
  //console.log(data[i][1]);
  //console.log(data[i][2]);
  if (data[i][0] == 0) {
    graph.addEdge(data[i][1], data[i][2]);
  } else {
    console.log(graph.hasEdge(data[i][1], data[i][2]));
  }
}
