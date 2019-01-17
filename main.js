function avsm(array = []) {
  const isEven = array.length % 2 === 0;

  return isEven
    ? array[array.length / 2 - 1]
    : array[Math.floor(array.length / 2)];
}

//console.log(avsm([2, 4, 7]));

function add(...param) {
  let total = 0;
  param.forEach(num => {
    total += num;
  });

  return total;
}

//console.log(add(1, 2, 3, 4, 5));
//console.log(add(1, 2));

function addBorder(picture) {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}

//console.log(addBorder(["abc", "ded"]));

function addTowDigits(number) {
  const nums = number.toString().split("");

  return nums.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
}

//console.log(addTowDigits(11));

function aep(inputArray) {
  let largestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }

  return largestProduct;
}

//console.log(aep([4, 6, -2, -5, 7, 3]));

function allLongestStrings(inputArray) {
  let longestLength = 0;
  const longestWords = [];

  inputArray.forEach(word => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach(word => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

//console.log(allLongestStrings(["aba", "aa", "ad", "vcda", "abaaaa"]));

function almostIncreasingSequence(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}

// console.log(almostIncreasingSequence([1, 3, 1, 2]));
// console.log(almostIncreasingSequence([1, 3, 2]));

function alphaShift(inputStrings) {
  const alphabet = { a: "b", b: "c", c: "d", d: "e", e: "f" };

  let inputShifted = inputStrings.split("");

  for (let i = 0; i < inputShifted.length; i++) {
    inputShifted[i] = alphabet[inputShifted[i]];
  }

  return inputShifted.join("");
}

//console.log(alphaShift("abc"));

function aSub(str) {
  const chars = str.split("");
  const charValues = [];

  chars.forEach(char => {
    charValues.push(char.charCodeAt(0));
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }
  return true;
}

//console.log(aSub("abcz"));

function alterSums(array) {
  let evenSum = 0;
  let oddSum = 0;

  array.forEach((element, index) => {
    if (index % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  });

  return [evenSum, oddSum];
}

//console.log(alterSums([50, 60, 60, 45, 70]));

function areSimilar(a, b) {
  const c = [];
  let d = [];

  if (a.toString() === b.toString()) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) {
    return true;
  }

  return false;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));

function arrayConversion(inputArray) {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }

  return inputArray[0];
}

function sumProduct(number, isOdd) {
  const sumProduct = [];

  if (isOdd) {
    for (let i = 0; i < number.length; i += 2) {
      sumProduct.push(number[i] + number[i + 1]);
    }
  } else {
    for (let i = 0; i < number.length; i += 2) {
      sumProduct.push(number[i] * number[i + 1]);
    }
  }
  return sumProduct;
}

//console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

function arrayMaxConsecutiveSum(array, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += array[i];
  }

  max = sum;

  for (let i = k; i < array.length; i++) {
    sum -= array[i - k];
    sum += array[i];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

//console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

function arrayMaximaAdjaccentDifference(array) {
  let maxDiff = Math.abs(array[0] - array[1]);

  for (let i = 0; i < array.length; i++) {
    let absoluteDiff = Math.abs(array[i - 1] - array[i]);
    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }
  return maxDiff;
}

//console.log(arrayMaximaAdjaccentDifference([2, 4, 1, 0]));
function memo(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

fib = memo(fib);

module.exports = fib;
//console.log(fib(6));

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

const q = new Queue();

q.add(1);
// console.log(q.remove());

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);

// console.log(s.pop());
// console.log(s.pop());

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// const n1 = new Node("hi");
// const n2 = new Node("there", n1);
// console.log(n1.data);
// console.log(n2.next);

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const tree = new Tree();
tree.root = new Node(1);

tree.root.add(2);
tree.root.add(3);
tree.root.children[0].add(4);
tree.root.children[0].add(-50);
tree.root.children[0].add(-6);
tree.root.children[1].add(50);
tree.root.children[1].add(6);

//console.log(tree.root.children[0]);

function print(node) {
  console.log(node.data);
}

//tree.traverseBF(print);
//tree.traverseDF(print);

class Node2 {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node2(data));
  }
}

function levelWidth(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

const root = new Node2(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[1].add(5);

//console.log(levelWidth(root));

function vailidAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  console.log(lookup);

  return true;
}

//console.log(vailidAnagram("anagram", "nagaram"));

function contUniqueValues(arr) {
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//console.log(contUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (const key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

//console.log(sameFrequency(182, 281));

function areThereDuplicates() {
  let collection = {};

  for (const val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  for (const key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

//console.log(areThereDuplicates(1, 2, 2));

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

//console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//console.log(isSubsequence("", "hello world"));

function maxSubarrySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

//console.log(maxSubarrySum([100, 200, 300, 400], 2));

function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;

  return x * factorial(x - 1);
}

//console.log(factorial(4));

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

//console.log(recursiveRange(10));

function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

//console.log(fib(10));

function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

//console.log(reverse("hello"));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}
//console.log(isPalindrome("momom"));

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
const isOdd = val => val % 2 !== 0;

//console.log(someRecursive([1, 2, 6, 8], isOdd));

function flatten(oldArr) {
  var newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

//console.log(flatten([[1, 2, 3, [4, 5]]]));

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

//console.log(capitalizeWords(["car", "taco", "banana"]));

function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

//console.log(nestedEvenSum(obj2));

function stringifyNumbers(obj) {
  var newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

//console.log(stringifyNumbers(obj));

function collectStrings(obj) {
  var stringArr = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      stringArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringArr = stringArr.concat(collectStrings(obj[key]));
    }
  }
  return stringArr;
}

let obj3 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

//console.log(collectStrings(obj3));

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }

  return -1;
}
function binaryRecusive(arr, start, end, elem) {
  if (end < start) {
    return -1;
  }
  var middle = Math.floor((start + end) / 2);

  if (arr[middle] === elem) return middle;

  if (elem < arr[middle]) return binaryRecusive(arr, start, middle - 1, elem);

  return binaryRecusive(arr, middle + 1, end, elem);
}

// console.log(
//   binaryRecusive(
//     [2, 5, 6, 9, 13, 15, 28, 30],
//     0,
//     [2, 5, 6, 9, 13, 15, 28, 30].length - 1,
//     2
//   )
// );

function linearSearchRe(arr, index, val) {
  if (index < 0) return -1;
  if (arr[index] === val) return index;

  return linearSearchRe(arr, index - 1, val);
}

// console.log(
//   linearSearchRe([10, 15, 20, 25, 30], [10, 15, 20, 25, 30].length, 10)
// );

class NodeList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new NodeList(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = this.remove.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail.tail = node;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

// list.push("HI");
// list.push("there!");
// list.pop();
// list.print();

class NodeDouble {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new NodeDouble(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

let node = new NodeDouble(1);
node.next = new NodeDouble(2);
node.next.prev = node;

list = new DoublyLinkedList();
list.push(9);
list.push(10);
list.push(11);

//console.log(list.unshift(1));
//console.log(list.shift());

class NodeStack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new NodeStack(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp.value;
  }
}

let stack = new Stack2();
stack.push(1);
stack.push(2);
stack.push(3);

//console.log(stack.pop());

class NodeQueue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new NodeQueue(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let queue = new Queue2();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

//console.log(queue.dequeue());

class NodeTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new NodeTree(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }

  BFS() {
    var node = this.root;
    var data = [];
    var queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree2 = new BinarySearchTree();

tree2.insert(10);
tree2.insert(6);
tree2.insert(15);
tree2.insert(3);
tree2.insert(8);
tree2.insert(20);

//console.log(tree2.DFSPreOrder());

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(13);
//console.log(heap);

function hash(key, arrayLen) {
  let total = 0;
  let WEIRED_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRED_PRIME + value) % arrayLen;
  }
  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRED_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRED_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let hashTable = new HashTable(17);
hashTable.set("maroon", "#800000");
hashTable.set("yello", "#800001");
hashTable.set("olive", "#800002");
hashTable.set("salmon", "#800003");
hashTable.set("maroon", "#800004");

//console.log(hashTable.get("olive"));

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

//console.log(graph);

// graph.addVertex("you");
// graph.addVertex("bob");
// graph.addVertex("alice");
// graph.addVertex("chaire");
// graph.addVertex("anuj");
// graph.addVertex("peggy");
// graph.addVertex("mthom");
// graph.addVertex("jonny");

// graph.addEdge("you", "alice");
// graph.addEdge("you", "bob");
// graph.addEdge("you", "chaire");
// graph.addEdge("bob", "anuj");
// graph.addEdge("bob", "peggy");
// graph.addEdge("alice", "peggy");
// graph.addEdge("chaire", "mthom");
// graph.addEdge("chaire", "jonny");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// graph.addVertex("由比ヶ浜");
// graph.addVertex("長谷");
// graph.addVertex("和田塚");
// graph.addVertex("七里");
// graph.addVertex("稲村");

// graph.addEdge("由比ヶ浜", "和田塚");
// graph.addEdge("長谷", "由比ヶ浜");
// graph.addEdge("長谷", "稲村");
// graph.addEdge("稲村", "七里");

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

  Dijkstra(start, finish) {
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

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibmemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibmemo(n - 1, memo) + fibmemo(n - 2, memo);
  memo[n] = res;
  return res;
}

let arr = [1, 2, 4, 10];
let arr2 = [1, 2, 4, 4];

function sumOfTowNumbers(arr, target) {
  let comp = {};

  for (const value of arr) {
    if (comp.hasOwnProperty(value)) {
      return true;
    }
    diff = target - value;
    comp[diff] = diff;

    console.log(comp);
  }
  return false;
}

//console.log(sumOfTowNumbers(arr, 14));

function sumOfTwo(arr1, arr2, target) {
  const hashMap = {};

  for (let num of arr1) {
    const difference = target - num;
    hashMap[difference] = difference;
  }

  for (let num of arr2) {
    if (hashMap.hasOwnProperty(num)) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "1"];

// function comapare(array1, array2) {
//   const object2 = {};
//   array1.forEach(array => {
//     object2[array] = array;
//   });
//   console.log(object2);

//   for (const item of array2) {
//     if (object2.hasOwnProperty(item)) return true;
//   }

//   return false;
// }

// console.log(comapare(array1, array2));

// function firstRecurreingCharater(input) {
//   let map = {};

//   for (const val of input) {
//     if (map[val]) {
//       return val;
//     } else {
//       map[val] = val;
//     }
//   }

//   return undefined;
// }

// console.log(firstRecurreingCharater([3, 5, 1, 2, 3]));

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

//console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
