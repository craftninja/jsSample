module.exports = function triangleMadeOfBlocks(rows) {
  if (rows === 0) {
    return 0;
  } else if (rows === 1) {
    return 1
  }
  return rows + triangleMadeOfBlocks(rows - 1)
};

// how it wurks:
// 0
// 1 - #
// 2 - ##
// 3 - ###
// 4 - ####
// 5 - #####
