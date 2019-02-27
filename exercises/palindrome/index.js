// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str === str.split('').reverse().join('')
}

/*
function palindrome(str) {
  // my initial guess
  return str === str.split('').reverse().join('')
}
*/

/*
function palindrome(str) {
  // another, but lesser option
  return str.split('').every((x, i) => {
    return x === str[str.length - i - 1]
  })
}
*/

module.exports = palindrome;
