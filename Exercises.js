//Question 1
function myReverse(str) {
  let newStr = "";
  for(let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
      combinations.push(str.substring(i, j + 1));
    }
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  let newStr = "";
  newStr += str.slice(0, 1).toUpperCase();
  for(let i = 1; i < str.length; i++){
    if(str[i - 1] === " "){
      newStr += str.slice(i, i + 1).toUpperCase();
    } else newStr += str.slice(i, i + 1);
  }
  return newStr;
}


//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***



// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
