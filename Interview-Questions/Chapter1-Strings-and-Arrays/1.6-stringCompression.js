// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Hints: #92, #110


// MY SOLUTION

var compress = function(chars) {
    let index = 0
    let left = 0
    while(left<chars.length){
        let right = left;
        while(right < chars.length && chars[right] === chars[left]){
            right++
        }
        chars[index++] = chars[left]
        if(right-left > 1){
            let count = right-left + ''
            for(let i = 0; i < count.length;i++){
                chars[index++] = count[i]
            }
        }
        left = right
    }
return index
}

console.log('aaaaaa', compress('aaaaaa'), 'a6');
console.log('aabcccccaaa', compress('aabcccccaaa'), 'a2b1c5a3');


// GITHUB SOLUTION

var strComp = function(string) {
    var compressed = '';
    var currChar = '';
    var currCount = '';
    var maxCount = 1;
    for (var i = 0; i < string.length; i++) {
      if (currChar !== string[i]) {
        console.log(currChar, string[i], i);
        compressed = compressed + currChar + currCount;
        maxCount = Math.max(maxCount, currCount);
        currChar = string[i];
        currCount = 1;
      } else {
        currCount++;
      }
    }
    compressed = compressed + currChar + currCount;
    maxCount = Math.max(maxCount, currCount);
  
    return maxCount === 1 ? string : compressed;
};

console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');