//#344 reverse string
var reverseString = function(s) {
  var reverseString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reverseString += s[i];
  }
  return reverseString;
};

//console.log(reverseString("hello"));

//#412 fuzzbizz
var fizzBuzz = function(n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i.toString());
    }
  }
  return output;
};

var fizzBuzz2 = function(n) {
  let arr = Array.from({ length: n }, (v, k) => {
    k = k + 1;
    if (k % 15 == 0) return "FizzBuzz";
    else if (k % 3 == 0) return "Fizz";
    else if (k % 5 == 0) return "Buzz";
    else return "" + k;
  });
  return arr;
};

//console.log(fizzBuzz2(15));

//# 136 Single Number
var singleNumber = function(nums) {
  let output = {};
  for (let n of nums) {
    if (!output[n]) {
      output[n] = 1;
    } else {
      output[n]++;
    }
  }

  for (const key in output) {
    if (output[key] === 1) {
      return parseInt(key);
    }
  }
};

//console.log(singleNumber([2, 2, 1, 1, 3]));

//#104 Maxium Depth of Binary Tree
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.right.right = new TreeNode(7);
node.right.left = new TreeNode(15);

var maxDepth = function(root) {
  const depths = [];
  (function DFS(root, depth) {
    if (root === null) {
      depths.push(depth);
      return;
    }
    depth += 1;
    DFS(root.left, depth);
    DFS(root.right, depth);
  })(root, 0);
  return Math.max(...depths);
};
var maxDepth2 = root => {
  if (!root) return 0;
  const heights = [];
  const recurseDepth = (node, height) => {
    if (!node.left && !node.right) return heights.push(height);
    if (node.left) recurseDepth(node.left, height + 1);
    if (node.right) recurseDepth(node.right, height + 1);
  };

  recurseDepth(root, 1);
  return Math.max(...heights);
};

var maxDepthIterative = function(root) {
  if (!root) return 0;
  const heights = [];
  const stack = [{ node: root, height: 1 }];

  while (stack.length) {
    const current = stack.pop();
    if (!current.node.left && !current.node.right) heights.push(current.height);
    if (current.node.left)
      stack.push({ node: current.node.left, height: current.height + 1 });
    if (current.node.right)
      stack.push({ node: current.node.right, height: current.height + 1 });
  }
  return Math.max(...heights);
};

//console.log(maxDepth(node));

//#283 Move Zeros
var moveZeros = function(nums) {
  for (let i = nums.length; i--; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

//console.log(moveZeros([0, 1, 0, 3, 12]));

//#206 Reverse Linked List
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

function reverseList(head) {
  var prev = null;
  while (head) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

function reverseListRe(head) {
  if (!head || !head.next) {
    return head;
  }
  var newHead = reverseListRe(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
//console.log(reverseList(list));

//#171 Excel Sheet Column Number
var titleToNumber = function(s) {
  var result = 0;
  var sLenght = s.length;
  for (let i = 0; i < sLenght; i++) {
    result = result * 26 + (s.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }
  return result;
};

//console.log(titleToNumber("A"));

//#169 Majority Element
var majorityElement = function(nums) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};

//console.log(majorityElement([2, 2, 2, 1, 1, 2]));

//#237 Delete Node in a Linked List
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list2 = new ListNode(4);
list2.next = new ListNode(5);
list2.next.next = new ListNode(1);
list2.next.next.next = new ListNode(9);

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

//console.log(deleteNode(list2.next));

//#122 Best Time to buy and Sell Stock
var maxProfit = function(prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) total += prices[i] - prices[i - 1];
  }
  return total;
};

//console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//#1 Two of sum
var twoSum = function(num, target) {
  var map = {};
  for (let i = 0; i < num.length; i++) {
    map[num[i]] = i;
  }

  for (let i = 0; i < num.length; i++) {
    var index = map[target - num[i]];
    if (index) {
      return [i, index];
    }
  }
  return [];
};

var twoSum2 = function(nums, target) {
  var hashTable = {};
  result = [];

  for (let i = 0; i < nums.length; i++) {
    findnum = target - nums[i];

    if (typeof hashTable[findnum] !== "undefined") {
      result.push(hashTable[findnum], i);
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return result;
};

//console.log(twoSum([2, 3, 7, 11], 9));

//#3 Longest Substring without repeating charaters
var lenghtOfLongestSubstring = function(s) {
  let leftIndex = 0;
  let rightIndex = 0;
  let logestCount = 0;
  const memory = {};

  while (leftIndex < s.length && rightIndex < s.length) {
    const rightIndexCharacter = s[rightIndex];
    const leftIndexCharacter = s[leftIndex];
    if (memory[rightIndexCharacter] === undefined) {
      memory[rightIndexCharacter] = rightIndex;
      rightIndex++;
    } else {
      delete memory[leftIndexCharacter];
      leftIndex++;
    }

    logestCount = Math.max(logestCount, rightIndex - leftIndex);
  }

  return logestCount;
};

//console.log(lenghtOfLongestSubstring("abcabcbb"));

//#20 valid parenthese
var map = {
  "(": ")",
  "[": "]",
  "{": "}"
};

var isValid = function(s) {
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    var el = s[i];

    if (map[el]) {
      stack.push(map[el]);
      console.log(el);
    } else {
      if (el !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//console.log(isValid("{()}"));

//#Trapping rain water　まだ理解できず。。
const trap = height => {
  let waterVol = 0;
  let left = 0;
  let right = height.length - 1;
  let leftWall = height[left];
  let rightWall = height[right];

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < leftWall) {
        waterVol += leftWall - height[left];
      } else {
        leftWall = height[left];
      }
      left++;
    } else {
      if (height[right] < rightWall) {
        waterVol += rightWall - height[right];
      } else {
        rightWall = height[right];
      }
      right--;
    }
  }
  return waterVol;
};

//console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

//#2 Add two Numbers
function ListNode22(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode22(2);
l1.next = new ListNode22(4);
l1.next.next = new ListNode22(3);

let l2 = new ListNode22(5);
l2.next = new ListNode22(6);
l2.next.next = new ListNode22(4);

var addTwoNumbers = function(l1, l2) {
  var List = new ListNode22(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode22(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }
  return List.next;
};

//console.log(addTwoNumbers(l1, l2));

//# 5 Longest Pailndromic Substring
var longestPalindrome = function(s) {
  let res = "";
  let cur = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let left = i;
      let right = j;

      while (s[left] && s[left] === s[right]) {
        cur = s.substring(left, right + 1);
        if (cur.length > res.length) res = cur;
        left--;
        right++;
      }
    }
  }
  return res;
};

var longestPalindrome2 = function(s) {
  var max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

//console.log(longestPalindrome2("ada"));
