import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
} from './sort'

import { print, getRandNums } from './util'

print('bubble sort: ', bubbleSort(getRandNums(5)))

print('selection sort: ', selectionSort(getRandNums(5)))

print('insertion sort: ', insertionSort(getRandNums(5)))

print('quick sort: ', quickSort([2, 4, 3, 5,  9, 8, 7]))

print('merge sort: ', mergeSort(getRandNums()))
