// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
// Hints: #44, #117, #132

// MY SOLUTION

function isUnique (string){
    let hash = new Map()
  
    for (let i = 0; i < string.length; i++){
      if (hash[string[i]] === undefined){
        hash[string[i]] = 1
      } else {
        hash[string[i]] ++
      }
    }
    for (let key in hash){
      if (hash[key] > 1 ){
        return false
      } 
    }
    return true
  }
  console.log(isUnique('does'))
  console.log(isUnique('repeat'))
  console.log(isUnique('abcd'), 'true');
  console.log(isUnique('abccd'), 'false');
  console.log(isUnique('bhjjb'), 'false');
  console.log(isUnique('mdjq'), 'true');



//   GITHUB SOLUTION

let allUniqueChars = function(string) {
  
    // O(n^2) approach, no additional data structures used
    // for each character, check remaining characters for duplicates
    for (var i = 0; i < string.length; i++) {
      for (var j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false; // if match, return false
        }
      }
    }
    return true; // if no match, return true
  };

console.log(allUniqueChars('abcd'), 'true');
console.log(allUniqueChars('abccd'), 'false');
console.log(allUniqueChars('bhjjb'), 'false');
console.log(allUniqueChars('mdjq'), 'true');

  let everyCharUnique = (str, indexOffset = 'a'.charCodeAt()) => {
      let counterTable = Number();
      for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
          const mask = 1 << index;
          if(counterTable & mask)
              return false;
          counterTable |= mask;
      }
      return true;
  };
  
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');

  function everyUniqueChar (str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] && obj[str[i]] >= 1) {
        return false;
      } else {
        obj[str[i]] = 1;
      }
    }
    return true;
  }

console.log(everyUniqueChar('abcd'), 'true');
console.log(everyUniqueChar('abccd'), 'false');
console.log(everyUniqueChar('bhjjb'), 'false');
console.log(everyUniqueChar('mdjq'), 'true');