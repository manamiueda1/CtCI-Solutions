// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.) 

// Hints: #106, #121, #134, #136

// MY SOLUTION

function palindromePerm (string){
    let hash = new Map()
    string = string.split(' ').join('').toLowerCase()
    console.log(string)
    for (let i = 0; i < string.length; i++){
      if (hash[string[i]] === undefined){
        hash[string[i]] = 1
      } else {
        hash[string[i]] ++
      }
    }
    let odd = 0
    let charAmount = Object.values(hash)
    for (let i = 0; i < charAmount.length; i++){
      if (charAmount[i] % 2 === 1){
        odd ++
      }
      if (odd >= 2){
        return false
      }
    }
    return true
}
  
console.log(palindromePerm('Tact Coa'), 'true');
console.log(palindromePerm('Tact boa'), 'false');

// GITHUB SOLUTION

let palinPerm = function(string) {
    // create object literal to store charcount
    var chars = {};
    var currChar;
    var mulligan = false;
    var isPerm = true;
    // pump characters in, spaces not counted, all lowercase
    string.split('').forEach((char) => {
      if (char !== ' ') {
        currChar = char.toLowerCase();
        if (chars[currChar] === undefined) {
          chars[currChar] = 0;
        }
        chars[currChar]++;
      }
    });
    // check that all chars are even count, except for one exception
    Object.keys(chars).forEach((char) => {
      if (chars[char] % 2 > 0) {
      // if more than one exception, return false
        if (mulligan) {
          isPerm = false; // return in a forEach statment doesn't flow out of function scope
        } else {
          mulligan = true;
        }
      }
    });
    // if not return true
    return isPerm;
};
  
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');

function palinPermutation(s) {
    const sanitized = s.toUpperCase().split(" ").join("");
    const freq = new Map();
    for (let i = 0; i < sanitized.length; i++) {
      const char = sanitized.charAt(i);
      const prevFreq = freq.get(char) || 0;
      freq.set(char, prevFreq + 1);
    }
    let oddCount = 0;
    for (let char of freq) {
      if (char[1] % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount < 2;
}
  
console.log(palinPermutation('Tact Coa'), 'true');
console.log(palinPermutation('Tact boa'), 'false');