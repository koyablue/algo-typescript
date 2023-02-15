import {
  bubbleSort,
  selectionSort,
} from './sort'

// Don't want to write 'console.log' every time.
const print = (arg: any) => {
  console.log(arg)
}

const numbers = [2, 5, 1, 8, 7, 3]

print(bubbleSort(numbers))

print(selectionSort(numbers))
