export const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length <= 1) {
    return numbers
  }

  const center = Math.floor(numbers.length / 2)
  const left = numbers.slice(0, center)
  const right = numbers.slice(center)

  mergeSort(left)
  mergeSort(right)

  // ex)
  // left: [4, 5], right: [1, 8] -> numbers: [1, 4, 5, 8]
  // i: index of left, j: index of right, k: index of numbers
  let i = 0, j = 0, k = 0
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      numbers[k] = left[i]
      i += 1
    } else {
      numbers[k] = right[j]
      j += 1
    }

    k += 1
  }

  while (i < left.length) {
    numbers[k] = left[i]
    i += 1
    k += 1
  }

  while (j < right.length) {
    numbers[k] = right[j]
    j += 1
    k +=1
  }

  return numbers
}
