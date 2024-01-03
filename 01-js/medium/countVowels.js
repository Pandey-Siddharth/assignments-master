/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
   let a = [];
   let c = 0;
   a = str.split('');
   for(let i=0;i<a.length;i++){
     if(a[i] == 'a'||a[i] == 'e'||a[i] == 'i'||a[i] == 'o'||a[i] == 'u'){
        c = c+1;
     }
   }
   return c;
}

module.exports = countVowels;