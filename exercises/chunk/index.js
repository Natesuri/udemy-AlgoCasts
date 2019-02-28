// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    start = 0
    endChunk = size
    chunkedArray = []

    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(start, endChunk))
      start += size
      endChunk += size
    }

    return chunkedArray
}

/*
// my initial solution
function chunk(array, size) {

  start = 0
  endChunk = size
  chunkedArray = []

  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(start, endChunk))
    start += size
    endChunk += size
  }

  return chunkedArray
}
*/

/*
// his first solution
function chunk(array, size) {
  chunked = []

  for (let chunk of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([chunk])
    } else {
      last.push(chunk)
    }
  }

  return chunked
}
*/

/*

*/

module.exports = chunk;
