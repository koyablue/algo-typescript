class ListNode {
  data: any
  next: ListNode | null

  constructor(data: any, next?: ListNode | null) {
    this.data = data
    this.next = next || null
  }
}

class SinglyLinkedList {
  head: ListNode | null

  constructor(head?: ListNode | null) {
    this.head = head || null
  }

  /**
   * add node to the last
   *
   * @param {*} data
   * @memberof LinkedList
   */
  append(data: any) {
    const newNode = new ListNode(data)
    if (this.head === null) {
      this.head = newNode
      return
    }

    let lastNode = this.head
    while (lastNode.next) {
      lastNode = lastNode.next
    }
    lastNode.next = newNode
  }

  /**
   * add node to the head
   *
   * @param {*} data
   * @memberof LinkedList
   */
  insert(data: any) {
    const newNode = new ListNode(data)
    newNode.next = this.head
    this.head = newNode
  }

  remove(data: any) {
    let currentNode = this.head

    if (currentNode && currentNode.data === data) {
      this.head = currentNode.next
      currentNode = null
      return
    }

    let previousNode = currentNode
    while (currentNode && currentNode.data !== data) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    if (currentNode === null) return

    previousNode!.next = currentNode.next
  }

  /**
   *
   *
   * @memberof LinkedList
   */
  reverse() {
    let previousNode = null
    let currentNode = this.head

    while (currentNode) {
      const nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }

    this.head = previousNode
  }

  /**
   *
   *
   * @memberof LinkedList
   */
  reverseRecursive() {
    const _reverse = (currentNode: ListNode | null, previousNode: ListNode | null): ListNode | null => {
      if (!currentNode) return previousNode

      const nextNode = currentNode!.next
      currentNode!.next = previousNode
      previousNode = currentNode
      currentNode = nextNode

      return _reverse(currentNode, previousNode)
    }

    this.head = _reverse(this.head, null)
  }

  reverseEven() {
    // ex) 1,4,6,8,9 -> 1,8,6,4,9
    // ex) 1,2,3,4,5 -> 1,2,3,4,5
    const _reverseEven = (head: ListNode | null, previousNode: ListNode | null) => {
      if (!head) return null

      let currentNode: ListNode | null = head
      while (currentNode && currentNode.data % 2 === 0 ) {
        const nextNode: ListNode | null = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode
      }

      if (currentNode !== head) {
        head.next = currentNode
        _reverseEven(currentNode, null)
        return previousNode
      } else {
        head.next = _reverseEven(head.next, head)
        return head
      }
    }

    this.head = _reverseEven(this.head, null)
  }

  /**
   * output data
   *
   * @memberof LinkedList
   */
  print() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }
}

const l = new SinglyLinkedList()
l.append(2)
l.append(4)
l.append(6)
l.append(1)
l.append(3)
l.append(5)
l.append(2)
l.append(4)
l.append(6)
l.print()
console.log('#########')
l.reverseEven()
l.print()
