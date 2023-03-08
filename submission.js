const findSum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const findFrequency = function(array) {
   let newObject = array.reduce(function (allLetters, letter) {
    let currCount = allLetters[letter] ?? 0;
    return {
      ...allLetters,
      [letter]: currCount + 1,
    };
  }, {});

  let arr = Object.values(newObject);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  let result = {
    most: getKeyByValue(newObject, max),
    least: getKeyByValue(newObject, min),
  };
  return result;
};

const isPalindrome = function(str) {
  var backwardsString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    backwardsString += str[i];
  }
  if (backwardsString.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  let productArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    productArray.push(array[i] * array[i + 1]);
  }
  let maxProduct = Math.max(...productArray);
  return maxProduct;
};

const removeParenth = function(str) {
   var firstParenth = 0;
  var secondParenth = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      firstParenth = i;
    } else if (str[i] === ")") {
      secondParenth = i;
    }
  }
  let stringArray = [...str];

  stringArray.splice(firstParenth, secondParenth - firstParenth + 1);

  let newString = stringArray.join("");

  return newString;
};

const scoreScrabble = function(str) {
  let onePoint = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  let twoPoints = ["d", "g"];
  let threePoints = ["b", "c", "m", "p"];
  let fourPoints = ["f", "h", "v", "w", "y"];
  let fivePoints = ["k"];
  let eightPoints = ["j", "x"];
  let tenPoints = ["q", "z"];

  let sum = 0;
  let arrayOfWord = [...str];
  arrayOfWord.forEach(function (letter) {
    onePoint.forEach(function (letters) {
      if (letter === letters) {
        sum += 1;
      }
    });
    twoPoints.forEach(function (letters) {
      if (letter === letters) {
        sum += 2;
      }
    });
    threePoints.forEach(function (letters) {
      if (letter === letters) {
        sum += 3;
      }
    });
    fourPoints.forEach(function (letters) {
      if (letter === letters) {
        sum += 4;
      }
    });
    fivePoints.forEach(function (letters) {
      if (letter === letters) {
        sum += 5;
      }
    });
    eightPoints.forEach(function (letters) {
      if (letter === letters) {
        sum += 8;
      }
    });
    tenPoints.forEach(function (letters) {
      if (letter === letters) {
        sum += 10;
      }
    });
  });
  return sum;
};
