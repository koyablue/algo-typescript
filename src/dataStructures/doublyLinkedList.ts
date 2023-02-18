export class ListNode {
  data: any
  next: ListNode | null
  prev: ListNode | null

  constructor(data: any, next: ListNode | null, prev: ListNode | null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

export class DoublyLinkedList {
  head: ListNode | null

  constructor(head: ListNode | null) {
    this.head = head
  }

  append(data: any) {
    const newNode = new ListNode(data, null, null)
    if (!this.head) {
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
    newNode.prev = currentNode
  }

  insert(data: any) {
    const newNode = new ListNode(data, null, null)
    if (!this.head) {
      this.head = newNode
      return
    }

    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

  remove(data: any) {
    let currentNode = this.head
    if (currentNode && currentNode.data === data) {
      if (!currentNode.next) {
        currentNode = null
        this.head = null
      } else {
        const nextNode = currentNode.next
        nextNode.prev = null
        currentNode = null
        this.head = nextNode
      }
    }

    while (currentNode && currentNode.data !== data) {
      currentNode = currentNode.next
    }

    if (currentNode === null) return

    if (currentNode.next === null) {
      const prev = currentNode.prev
      prev!.next = null
      currentNode = null
      return
    } else {
      const nextNode = currentNode.next
      const prevNode = currentNode.prev
      prevNode!.next = nextNode.next
      nextNode.prev = prevNode
      currentNode = null
      return
    }
  }

  print() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }
}

const d = new DoublyLinkedList(null)
d.append(1)
d.append(2)
d.insert(0)
d.remove(1)
d.print()
