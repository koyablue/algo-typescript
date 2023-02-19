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

const insert = (node: TreeNode | null, value: number): TreeNode => {
  if (node === null) return new TreeNode(value)

  value < node.value
    ? node.left = insert(node.left, value)
    : node.right = insert(node.right, value)

  return node
}

const inOrder = (node: TreeNode | null) => {
  if (node === null) return

  inOrder(node.left)
  console.log(node.value)
  inOrder(node.right)
}

const search = (node: TreeNode | null, value: number): boolean => {
  if (node === null) return false

  if (node.value === value) return true

  return node.value > value ? search(node.left, value) : search(node.right, value)
}

const minValue = (node: TreeNode) => {
  let currentNode = node
  while (currentNode?.left) {
    currentNode = currentNode.left
  }

  return currentNode
}

const remove = (node: TreeNode | null, value: number): TreeNode | null => {
  if (node === null) return node

  if (value < node.value) {
    node.left = remove(node.left, value)
  } else if (value > node.value) {
    node.right = remove(node.right, value)
  } else {
    if (node.left === null) {
      return node.right
    } else if (node.right === null) {
      return node.left
    }

    let tmp = minValue(node.right)
    node.value = tmp.value
    node.right = remove(node.right, tmp.value)
  }

  return node
}

let root = null
root = insert(root, 3)
root = insert(root, 6)
root = insert(root, 5)
root = insert(root, 7)
root = insert(root, 1)
root = insert(root, 10)
root = insert(root, 2)
inOrder(root)
console.log('###############')
root = remove(root, 6)
inOrder(root)
// console.log(search(root, 10))