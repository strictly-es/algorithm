//fizzBuzz
function fizzBuzz(params) {
  for (let i = 0; i <= params; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzBuzzRe(params) {
  if (params <= 1) return 1;

  if (params % 15 === 0) {
    console.log("FizzBuzz");
  } else if (params % 3 === 0) {
    console.log("Fizz");
  } else if (params % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(params);
  }
  return fizzBuzzRe(params - 1);
}
//console.log(fizzBuzzRe(45));

// var a = [5, 3, 9, 1, 10];
// a.sort(function(a, b) {
//   return a - b;
// });
// console.log(a);

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}

// console.log(
//   harmlessRansomNote(
//     "this is a secret note for you from a secret admirer",
//     "puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
//   )
// );

function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}
//console.log(isPalindrome("Madam I'm Adam"));

function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var newString = "";

  for (let i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}

//console.log(caesarCipher("Zoo Keeper", 2));

function reverseWords(string) {
  var wordsArr = string.split(" ");
  var reverseWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reverseWordsArr.push(reversedWord);
  });

  return reverseWordsArr.join(" ");
}

//console.log(reverseWords("Coding JavaScript"));

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    console.log("arr[i]" + arr[i]);
    console.log("arr[arr.length - 1 - i]" + arr[arr.length - 1 - i]);

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}
//console.log(reverseArrayInPlace([0, 1, 2, 3, 4, 5, 6]));

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    medain: getMedian(array),
    mode: getMode(array)
  };
}

function getMean(array) {
  var sum = 0;
  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    var mid1 = array[array.length / 2 - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }

  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

//console.log(meanMedianMode([1, 1, 2, 2, 3, 3]));

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (let i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var couterpart = sum - currNum;
    if (hashTable.indexOf(couterpart) !== -1) {
      pairs.push([currNum, couterpart]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}

//console.log(twoSum([1, 6, 4, 5, 3, 3], 7));

function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  if (middleElem < key && numArray.length > 1)
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  if (middleElem > key && numArray.length > 1)
    return binarySearch(numArray.splice(0, middleIdx), key);
  return false;
}

//console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));

function fibonacci(position, memo = []) {
  if (position < 3) return 1;
  if (memo[position]) return memo[position];
  memo[position] =
    fibonacci(position - 1, memo) + fibonacci(position - 2, memo);
  return memo[position];
}

//console.log(fibonacci(100));

function sieveOfEratosthenes(n) {
  var primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  var result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  return result;
}

//console.log(sieveOfEratosthenes(20));

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 9, 1]));

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
function merge(array1, array2) {
  var result = [];
  while (array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }

  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);

  return result;
}

//console.log(mergeSort([6000, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));

function maxStockProfit(priceArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var chageBuyPrice = true;

  for (let i = 0; i < priceArr.length; i++) {
    if (chageBuyPrice) buyPrice = priceArr[i];
    sellPrice = priceArr[i + 1];

    if (sellPrice < buyPrice) {
      chageBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      chageBuyPrice = false;
    }
  }
  return maxProfit;
}

console.log(maxStockProfit([10, 18, 4, 5, 9, 16, 12]));
