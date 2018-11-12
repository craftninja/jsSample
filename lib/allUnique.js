module.exports = {
  luke: function allUnique(string) {
    let result = true
    for (var i = 0; i < string.length; i++) {
      if ((string.split(string[i])).length > 2) result = false
    }
    return result

  },
  emily: function allUnique(string) {
    let tally = {};
    for (var i = 0; i < string.length; i++) {
      tally[string[i]] ? tally[string[i]] += 1 : tally[string[i]] = 1
    }

    let result = true
    for (var character in tally) {
      if (tally[character] > 1) {
        result = false
      }
    }
    return result
  }
}
