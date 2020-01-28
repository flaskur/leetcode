/**
 * Given two numbers we want to check if they have the same frequency of digits. That means the numbers must have the same count and digits.
 */


const sameFrequency = function(num1, num2) {
  let freqCount1 = new Object();
  let freqCount2 = new Object();

  if (num1.toString().length !== num2.toString().length) return false;

  // Populate the count objects.
  for (let char of num1.toString()) {
    freqCount1[char] = (freqCount1 || 0) + 1;
  }

  for (let char of num2.toString()) {
    freqCount2[char] = (freqCount2 || 0) + 1;
  }

  for (let key in freqCount1) {
    if (!(key in freqCount2)) return false;

    if (freqCount1[key] !== freqCount2[key]) return false;
  }

  return true;
}


// Official solution

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

