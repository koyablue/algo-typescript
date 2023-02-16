import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
} from './sort'

// Don't want to write 'console.log' every time.
const print = (arg: any) => {
  console.log(arg)
}

const numbers = (len = 10, range = 100) => Array.from({length: len}, () => Math.floor(Math.random() * range))

print(bubbleSort(numbers(5)))

print(selectionSort(numbers(5)))

print(insertionSort(numbers(5)))

print(quickSort(numbers(5)))
