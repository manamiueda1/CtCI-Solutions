// URLify: Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the additional characters, 
// and that you are given the "true" length of the string. 
// (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith" 

// Hints: #53, #118


// MY SOLUTION
function urlify (string){
    // console.log(string.split(' '))
    string = string.trim()
    let newString = string.replace(/ /g, '%20')
    return newString
}
  
console.log(urlify('Mr John Smith    ', 13));

//   GITHUB SOLUTION

let URLify = function(str) {
    // have a pointer to check from start to end
    var strArr = str.split('');
    var pointer = 0;
    while (pointer < str.length) {
        if (strArr[pointer] === ' ') {
        // *** needs more work here, a little wierd
        // not handling trailing spaces properly
        for (var i = str.length - 1; i > pointer + 3; i--) {
            strArr[i] = str[i - 2];
        }
        strArr[pointer] = '%';
        strArr[pointer+1] = '2';
        strArr[pointer+2] = '0';
        console.log(strArr, strArr.length);
        } 
        pointer++;
    }
    // if character is a space, move remainder chars by two
    // replace following three chars with '%20'
    return strArr.join('');
};
  
console.log(URLify('Mr John Smith    ', 13), 'Mr%20John%20Smith');


const replaceUrlSpaces = (str) => {
const convertToArray = str.trim().split('');
for(let i in convertToArray) {
    if(convertToArray[i] === " ") {
    convertToArray[i] = "%20"
    }
}
return convertToArray.join('');
}

console.log(replaceUrlSpaces("Sai Charan P"));

function url(str, len) {
    let s = "";
    let totalSpaces = str.length - len;
    let frontSpaces = 0;
    let flag = false;
    for (let i = 0; i < str.length; i++) {
      if (flag === false) {
        if (str[i] === " ") frontSpaces++;
        else flag = true;
      }
      if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
        if (str[i] === " ") s += "%20";
        else s += str[i];
      }
    }
  
    return s;
}
  
console.log(url("Mr John Smith   ", 13));