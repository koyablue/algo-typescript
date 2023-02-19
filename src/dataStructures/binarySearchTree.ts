export class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value === undefined ? 0 : value
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

class BinarySearchTree {
  root: TreeNode | null

  constructor(node?: TreeNode | null) {
    this.root = node === undefined ? null : node
  }

  insert(value: number) {
    if (this.root === null) {
      this.root = new TreeNode(value)
      return
    }

    const _insert = (node: TreeNode | null, value: number): TreeNode => {
      if (node === null) return new TreeNode(value)

      value < node.value
        ? node.left = _insert(node.left, value)
        : node.right = _insert(node.right, value)

      return node
    }

    _insert(this.root, value)
  }

  inOrder() {
    if (this.root === null) return

    const _inOrder = (node: TreeNode | null) => {
      if (node === null) return

      _inOrder(node.left)
      console.log(node.value)
      _inOrder(node.right)
    }

    _inOrder(this.root)
  }

  search(value: number) {
    if (this.root === null) return false

    const _search = (node: TreeNode | null, value: number): boolean => {
      if (node === null) return false

      if (node.value === value) return true

      return node.value > value
        ? _search(node.left, value)
        : _search(node.right, value)
    }

    return _search(this.root, value)
  }

  minValue(node: TreeNode) {
    let currentNode = node
    while (currentNode?.left) {
      currentNode = currentNode.left
    }

    return currentNode
  }

  remove(value: number) {
    const _remove = (node: TreeNode | null, value: number): TreeNode | null => {
      if (node === null) return node

      if (value < node.value) {
        node.left = _remove(node.left, value)
      } else if (value > node.value) {
        node.right = _remove(node.right, value)
      } else {
        if (node.left === null) {
          return node.right
        } else if (node.right === null) {
          return node.left
        }

        let tmp = this.minValue(node.right)
        node.value = tmp.value
        node.right = _remove(node.right, tmp.value)
      }

      return node
    }

    _remove(this.root, value)
  }
}

const binaryTree = new BinarySearchTree()
binaryTree.insert(3)
binaryTree.insert(6)
binaryTree.insert(5)
binaryTree.insert(7)
binaryTree.insert(1)
binaryTree.insert(10)
binaryTree.insert(2)

binaryTree.inOrder()
