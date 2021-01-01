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
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false;
            } else {
              mulligan = true;
              sP++; // second length is longer
            }
          } else {
            fP++;
            sP++;
          }
        }
        return true;
      }
    };
  
    var checkOneDiff = function(first, second) {
      if (first.length !== second.length) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false; // more than one mismatch
            } else {
              mulligan = true; // use up mulligan
            }
          }
          fP++;
          sP++;
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
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);