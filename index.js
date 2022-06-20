// SOLUTION 1

function isPalindrome(word) {
    // Write your algorithm here
    let reversed = word.split("").reverse().join("")
    if (word === reversed) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isPalindrome('abba')
isPalindrome('racecar')
isPalindrome('a')
isPalindrome('robot')
isPalindrome('ab')


// SOLUTION 2

function isPalindrome(word) {
    // iterate from the beginning of the string to the middle of the string
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
        // compare the letter we're iterating over to the corresponding letter at the end of the string
        const endIndex = word.length - 1 - startIndex;
        if (word[startIndex] !== word[endIndex]) {
            // if the letters don't match, return false
            return false;
        }
    }

    // if we reach the middle, and all the letters match, return true
    return true;
}

isPalindrome('allan')
    /* 
      Add your pseudocode here

      if the reversed word is strictly equal to the passed word,
      then return true

      else return false

    */

/*
  Add written explanation of your solution here


      1. I start by splitting the characters with spaces
      2. reversig the characters 
      3. Joining the reversed characters and assing to a new variable
      4. writting a conditional statement
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;