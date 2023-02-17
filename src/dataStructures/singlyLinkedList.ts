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
l.append(1)
l.append(2)
l.insert(0)
l.print()
l.reverseRecursive()
l.print()
