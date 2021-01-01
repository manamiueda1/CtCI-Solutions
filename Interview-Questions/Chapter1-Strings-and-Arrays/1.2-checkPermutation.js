// Check Permutation: Given two strings,write a method to decide if one is a permutation of the other.

// Hints: #7, #84, #722, #737

//  MY SOLUTION

function checkPermutation (str1, str2){
  
    if (str1.length !== str2.length){
      return false
    }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
    return str1 === str2
}
  
console.log(checkPermutation('aba', 'aab'), true);
console.log(checkPermutation('aba', 'aaba'), false);
console.log(checkPermutation('aba', 'aa'), false);

// GITHUB SOLUTION


var checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if (stringOne.length !== stringTwo.length) {
      return false;
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    } else {
      var sortedStringOne = stringOne.split('').sort().join('');
      var sortedStringTwo = stringTwo.split('').sort().join('');
      return sortedStringOne === sortedStringTwo;
    }
  };
  
 
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);