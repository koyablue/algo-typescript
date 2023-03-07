export class MiniHeap {
  heap: number[]
  currentSize: number

  constructor() {
    this.heap = [-1 * Number.MAX_SAFE_INTEGER]
    this.currentSize = 0
  }

  parentIndex(index: number): number {
    return Math.floor(index / 2)
  }

  leftChildIndex(index: number): number {
    return 2 * index
  }

  rightChildIndex(index: number): number {
    return (2 * index) + 1
  }

  swap(index1: number, index2: number) {
    const prevIdx1Val = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = prevIdx1Val
  }

  minChildIndex(index: number): number {
    const leftChildIdx = this.leftChildIndex(index)
    const rightChildIdx = this.rightChildIndex(index)

    if (rightChildIdx > this.currentSize) return leftChildIdx

    return this.heap[leftChildIdx] < this.heap[rightChildIdx] ? leftChildIdx : rightChildIdx
  }

  heapifyUp(index: number) {
    while (this.parentIndex(index) > 0) {
      const parentIndex = this.parentIndex(index)
      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex)
      }
      index = parentIndex
    }
  }

  heapifyDown(index: number) {
    while (this.leftChildIndex(index) <= this.currentSize) {
      const minChildIdx = this.minChildIndex(index)
    }
  }

  push(value: number) {
    this.heap.push(value)
    this.currentSize += 1
    this.heapifyUp(this.currentSize)
  }

  // get smallest element
  pop(): number | null {
    if (this.heap.length === 1) return null

    const root = this.heap[1]
    const data = this.heap.pop()

    if (this.heap.length === 1) return root

    this.heap[1] = Number(data)
    this.currentSize -= 1

    return root
  }
}

// ./node_modules/.bin/ts-node src/dataStructures/heap.ts

const h = new MiniHeap()
h.push(5)
h.push(6)
h.push(2)
h.push(1)
console.log(h.heap)