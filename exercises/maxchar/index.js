// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  counter = {}
  max = 0
  maxChar = ''

  for (let chars of str) {
    counter[chars] ? counter[chars]++ : counter[chars] = 1
  }

  for (let count in counter) {
    if (counter[count] > max) {
      max = counter[count]
      maxChar = count
    }
  }

  return maxChar
}

/*
// needed help to get this answer.
function maxChar(str) {
  counter = {}
  max = 0
  maxChar = ''

  for (let chars of str) {
    counter[chars] ? counter[chars]++ : counter[chars] = 1
  }

  for (let count in counter) {
    if (counter[count] > max) {
      max = counter[count]
      maxChar = count
    }
  }

  return maxChar
}
*/

module.exports = maxChar;
