import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
} from './sort'

// Don't want to write 'console.log' every time.
const print = (msg?: any, ...arg: any[]) => {
  console.log(msg, ...arg)
}

const numbers = (len = 10, range = 100) => Array.from({length: len}, () => Math.floor(Math.random() * range))

print('bubble sort: ', bubbleSort(numbers(5)))

print('selection sort: ', selectionSort(numbers(5)))

print('insertion sort: ', insertionSort(numbers(5)))

print('quick sort: ', quickSort([2, 4, 3, 5,  9, 8, 7]))

print('merge sort: ', mergeSort(numbers()))
