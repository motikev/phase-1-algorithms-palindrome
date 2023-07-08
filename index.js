function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here:
  1. Get the length of the input word.
  2. Loop through the first half of the word.
  3. Check if the character at the current position matches the character at the corresponding position from the end of the word.
  4. If a mismatch is found, return false.
  5. If the loop completes without finding any mismatches, return true.
*/

/*
  Add written explanation of your solution here:
  The `isPalindrome` function takes a string as input and returns `true` if the string is a palindrome and `false` otherwise. To determine if a string is a palindrome, we can loop through the first half of the string and check if the character at the current position matches the character at the corresponding position from the end of the string. If a mismatch is found, we can immediately return `false`. If the loop completes without finding any mismatches, we can return `true`.
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