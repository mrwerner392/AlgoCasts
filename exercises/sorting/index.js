// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      const temp = arr[i]
      arr[i] = arr[indexOfMin]
      arr[indexOfMin] = temp
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length > 1) {
    const midpoint = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, midpoint)), mergeSort(arr.slice(midpoint)))
  } else {
    return arr
  }
}

function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  // if (left.length) {
  //   result.push(...left)
  // } else {
  //   result.push(...right)
  // }
  // return result
  return [...result, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
