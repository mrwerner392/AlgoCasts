// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const nodes = [root]
  const lengths = []
  while (nodes.length) {
    const length = nodes.length
    lengths.push(length)
    for (let i = 0; i < length; i++) {
      nodes.push(...nodes.shift().children)
    }
  }
  return lengths
}

module.exports = levelWidth;
