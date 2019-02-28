// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

const cleanString = str => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

/*
// another solution, but might have computational disadvantage
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

const cleanString = str => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
*/


/*
// his complete 1st solution (3 iterations)
function anagrams(stringA, stringB) {
  charMapA = makeMap(stringA)
  charMapB = makeMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

const makeMap = str => {
  charMap = {}
  for (let letter of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[letter] = charMap[letter]++ || 1
    }
  return charMap
}
*/

/*
// my improved after starting his solution
// just condenses. Still my logic
*/

/*
// ugly, but works. My first solution
function anagrams(stringA, stringB) {
  fixedA = stringA.replace(/[^\w]/g, "").toLowerCase()
  fixedB = stringB.replace(/[^\w]/g, "").toLowerCase()

  charMapA = {}
  charMapB = {}

  same = true

  for (let letter of fixedA) {
    charMapA[letter]
      ? charMapA[letter]++
      : charMapA[letter] = 1
  }

  for (let letter of fixedB) {
    charMapB[letter]
      ? charMapB[letter]++
      : charMapB[letter] = 1
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      same = false
      return same
    }
  }

  return fixedA.length === fixedB.length
    ? same
    : false
}
*/

module.exports = anagrams;
