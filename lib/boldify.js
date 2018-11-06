module.exports = function boldify(string, matchers) {
  let needsToBeWrapped = string.split('').map(() => false)
  for (let matcherIndex in matchers) {
    const matcher = RegExp(matchers[matcherIndex],'g');
    let matchFound;

    while ((matchFound = matcher.exec(string)) !== null) {
      for (var i = matchFound.index; i < matcher.lastIndex; i++) {
        needsToBeWrapped[i] = true
      }
    }
  }

  const boldedString = string.split('').map((char, i) => {
    const firstInSet = needsToBeWrapped[i] && ( i === 0 || !needsToBeWrapped[i-1])
    const lastInSet = needsToBeWrapped[i] && (i === string.length - 1 || !needsToBeWrapped[i+1])
    if (firstInSet) {
      return `<b>${char}`
    } else if (lastInSet) {
      return `${char}</b>`
    }
    return char
  })
  return boldedString.join('')
}
