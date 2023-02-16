type IndexNum = number

/**
 *
 *
 * @param {number[]} numbers
 * @param {number} value
 * @return {*}  {IndexNum}
 */
export const binarySearch = (numbers: number[], value: number): IndexNum => {
  let leftIdx = 0 // index
  let rightIdx = numbers.length - 1 // index

  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    if (numbers[midIdx] === value) {
      return midIdx
    }

    numbers[midIdx] < value ? leftIdx = midIdx + 1 : rightIdx = midIdx - 1
  }

  return -1
}

/**
 *
 *
 * @param {number[]} numbers
 * @param {number} value
 * @return {*}  {IndexNum}
 */
export const binarySearchRecursive = (numbers: number[], value: number): IndexNum => {
  const _binarySearch = (
    numbers: number[],
    value: number,
    leftIdx: number,
    rightIdx: number
  ): IndexNum => {
    if (leftIdx > rightIdx) return -1

    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    if (numbers[midIdx] === value) return midIdx

    return numbers[midIdx] < value
      ? _binarySearch(numbers, value, midIdx + 1, rightIdx)
      : _binarySearch(numbers, value, leftIdx, midIdx - 1)
  }

  return _binarySearch(numbers, value, 0, numbers.length - 1)
}
