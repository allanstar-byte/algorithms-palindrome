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