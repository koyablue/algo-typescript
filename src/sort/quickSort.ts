/**
 * Returns index number of partition
 *
 * @param {number[]} numbers
 * @param {number} low index number
 * @param {number} high index number
 * @return {*}  {number}
 */
const partition = (numbers: number[], low: number, high: number): number => {
  let i = low - 1
  let pivot = numbers[high]

  // compare numbers[j] and pivot val
  for (let j = low; j < high; j++) {
    if (numbers[j] <= pivot) {
      i += 1
      const currentNumbersI = numbers[i]
      numbers[i] = numbers[j]
      numbers[j] = currentNumbersI
    }
  }

  const currentNumbersIPlus1 = numbers[i+1]
  numbers[i+1] = numbers[high]
  numbers[high] = currentNumbersIPlus1

  // index number of pivot
  return i + 1
}

export const quickSort =  (numbers: number[]): number[] => {
  const _quickSort = (numbers: number[], low: number, high: number) => {
    if (low < high) {
      const partitionIndex = partition(numbers, low, high)
      _quickSort(numbers, low, partitionIndex - 1)
      _quickSort(numbers, partitionIndex + 1, high)
    }
  }

  // low = 0 (index number of first element)
  // high = numbers.length - 1 (index number of last element)
  _quickSort(numbers, 0, numbers.length - 1)

  return numbers
}
