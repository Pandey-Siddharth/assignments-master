/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let a = [];
  for(let i=0;i<str.length;i++){
    if(/[a-z]/.test(str[i])){
     a.push(str[i]);
    }
  }
  for(let i=0;i<Math.floor(a.length/2);i++){
    if(a[i] != a[a.length-i-1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
