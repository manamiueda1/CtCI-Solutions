// One Away: There are three types of edits that can be performed on 
// strings: insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// EXAMPLE
// pale, ple -> true 
// pales, pale -> true 
// pale, bale -> true 
// pale, bake -> false 

// Hints:#23, #97, #130


// GITHUB SOLUTION

var oneAway = function(string1, string2) {
    // insert a char for str1 -> remove a char for str2
    var checkOneMissing = function(first, second) {
      if (first.length !== second.length - 1) {
        return false;
      } else {
        var secondChance = false;
        var firstPointer = 0; 
        var secondPointer = 0; 
        while (firstPointer < first.length) {
          if (first[firstPointer] !== second[secondPointer]) {
            // if secondChance is true, it already means, it is missing 1 letter so we we return false
            if (secondChance) {
              return false;
            } else {
              secondChance = true;
              secondPointer++; // second length is longer
            }
          } else {
            firstPointer++;
            secondPointer++;
          }
        }
        return true;
      }
    };
  
    var checkOneDiff = function(first, second) {
      if (first.length !== second.length) {
        return false;
      } else {
        var secondChance = false;
        var firstPointer = 0; 
        var secondPointer = 0; 
        while (firstPointer < first.length) {
          if (first[firstPointer] !== second[secondPointer]) {
            if (secondChance) {
              return false; // more than one mismatch
            } else {
              secondChance = true; // use up secondChance
            }
          }
          firstPointer++;
          secondPointer++;
        }
        return true;
      }
    };
    // insert a char for str1 -> remove a char for str2
    // check one diff
  
    // console log checks
    // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
    // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
    // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));
  
    return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
};

console.log(oneAway('pale', 'ple'), true); 
// checkOneMissing('pale', 'ple') returns false within the first if statement 
// checkOneMissing('ple', 'pale') secondChange determines if there is already 1 missing number or not -> returns true at the end of the first helper function
console.log(oneAway('pales', 'pale'), true);
// checkOneMissing('pale', 'pales') breaks out of the while loop and returns true, secondChange stays false
console.log(oneAway('pale', 'bale'), true);
// checkOneMissing('pale', 'bale') and checkOneMissing('bale', 'pale') both returns false within the first if statement because the lengths are the same 
// checkOneDiff('pale', 'bale') secondChange becomes true only once 
console.log(oneAway('pale', 'bake'), false);