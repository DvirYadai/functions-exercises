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
  const sum = x*n;
  return sum;
}

//Question 5
function getFirstNotRepeating(str) {
  let count = 1;
  let char = "";
  for(let i = 0; i < str.length; i++){
    count = 1;
    for(let j = 0; j < str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    if(count === 2){
      char = str[i];
      break;
    }
  }
  return char;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  const divisorsArr = [];
  let tempSum = num;
  while(tempSum > 1){
    divisorsArr.push(Math.ceil(tempSum / 2));
    tempSum = Math.ceil(tempSum / 2);
  }
  tempSum = 0;
  for(let i = 0; i < divisorsArr.length; i++){
    tempSum += divisorsArr[i];
  }
  let bool = false;
  if(tempSum === num){
    for(let i = 0; i < divisorsArr.length; i++){
      if((num % divisorsArr[i]) === 0){
        bool = true;
      } else break;
    }
  }
  if(bool){
    return true;
  } else return false;
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
