//Exercises

//minium
// Your code here.

function min(one, two){
  return Math.min(one, two);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//recursion
// Your code here.

function isEven(num){
  if (num === 0){
    return true;
  } else if (num === 1){
    return false;  
  } else if (num < 0) {
    return isEven(num+2);
  } else {
    return isEven(num-2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


//bean counting

// Your code here.

function countChar(string, char) {
  var result = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == char)
      result = result + 1;
  return result;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

