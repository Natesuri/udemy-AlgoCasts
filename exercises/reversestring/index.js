// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('')
}

/*
// easiest and best solution
function reverse(str) {
    return str.split('').reverse().join('')
}
*/

/*
// 'no cheating' version, w/o arrays
function reverse(str) {
  let reversed = ''

  for (let character of str) {
    reversed = character + reversed
  }

  return reversed
}
*/

/*
// reduce version
function reverse(str) {
  return str.split('').reduce( (rev, char) => char + rev, '' )
}
*/
module.exports = reverse;
