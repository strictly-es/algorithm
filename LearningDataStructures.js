class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }

  addToTail(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  removeHead(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  search(searchValue) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }

  indexOf(value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) indexes.push(currentIndex);
      currentNode = currentNode.next;
      currentIndex++;
    }
    return indexes;
  }
}

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

var ll = new LinkedList();

ll.addToHead(123);
ll.addToHead(70);
ll.addToHead("hello");
ll.addToTail(19);
//console.log(ll.search(123));

class BST {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (this.value === value) return true;
    if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  depthFirstTraversal(iteratorFunc, order) {
    if (order === "pre-order") iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === "in-order") iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === "post-order") iteratorFunc(this.value);
  }

  breadFirstTraversal(iteratorFunc) {
    var queue = [this];
    while (queue.length) {
      var treeNode = queue.shift();
      iteratorFunc(treeNode);

      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }

  getMinVal() {
    if (this.left) return this.left.getMinVal();
    else return this.value;
  }

  getMaxVal() {
    if (this.right) return this.right, getMaxVal();
    else return this.value;
  }
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function log(value) {
  console.log(value);
}

function log2(node) {
  console.log(node.value);
}
//console.log(bst);
//bst.depthFirstTraversal(log, "pre-order");
//bst.breadFirstTraversal(log2);

class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    var total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
  }

  insert(key, value) {
    var index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    } else {
      var currentNode = this.buckets[index];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  }

  get(key) {
    var index = this.hash(key);
    if (!this.buckets[index]) return null;
    else {
      var currentNode = this.buckets[index];
      while (currentNode) {
        if (currentNode.key === key) return currentNode.value;
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  retrieveAll() {
    var allNodes = [];
    for (let i = 0; i < this.numBuckets; i++) {
      var currentNode = this.buckets[i];
      while (currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }
    return allNodes;
  }
}

var myHT = new HashTable(30);

myHT.insert("Dean", "dean@gmail.com");
myHT.insert("Megan", "megan@gmail.com");
myHT.insert("Dane", "dane@gmail.com");
myHT.insert("Dean", "deanamcxhien@gmail.com");
myHT.insert("Megan", "megansmith@gmail.com");
myHT.insert("Dane", "dean101@gmail.com");

console.log(myHT.get("Dean"));
