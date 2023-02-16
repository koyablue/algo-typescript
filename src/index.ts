import {
  bubbleSort,
  selectionSort,
  insertionSort,
} from './sort'

// Don't want to write 'console.log' every time.
const print = (arg: any) => {
  console.log(arg)
}

const numbers = (len = 10, range = 100) => Array.from({length: len}, () => Math.floor(Math.random() * range))

print(bubbleSort(numbers()))

print(selectionSort(numbers()))

print(insertionSort(numbers(5)))
