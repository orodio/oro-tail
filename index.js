module.exports = function tail (arr) {
  try {
    arr = Array.from(arr)
    return arr.slice(1, arr.length - 1)
  } catch () {
    return []
  }
}
