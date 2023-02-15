export const bubbleSort = (numbers: number[]): number[] => {
  const lenNums = numbers.length

  for (let i = 0; i < lenNums; i++) {
    for (let j = 0; j < lenNums - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const currentJ = numbers[j]
        numbers[j] = numbers[j + 1]
        numbers[j + 1] = currentJ
      }
    }
  }

  return numbers
}
