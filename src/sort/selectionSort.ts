export const selectionSort = (numbers: number[]): number[] => {
  const lenNums = numbers.length

  for (let i = 0; i < lenNums; i++) {
    let minIdx = i
    for (let j = i + 1; j < lenNums; j++) {
      if (numbers[minIdx] > numbers[j]) {
        minIdx = j
      }
    }
    const currentI = numbers[i]
    numbers[i] = numbers[minIdx]
    numbers[minIdx] = currentI
  }

  return numbers
}
