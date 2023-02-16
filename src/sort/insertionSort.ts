export const insertionSort = (numbers: number[]): number[] => {
  const lenNumbers = numbers.length

  for (let i = 1; i < lenNumbers; i++) {
    let tmp = numbers[i]
    let j = i - 1
    while (j >= 0 && numbers[j] > tmp) {
      numbers[j + 1] = numbers[j]

      console.log('while: ', numbers)

      j -= 1
    }
    numbers[j + 1] = tmp
  }

  return numbers
}
