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

let root = null
root = insert(root, 3)
root = insert(root, 6)
root = insert(root, 5)
root = insert(root, 7)
root = insert(root, 1)
root = insert(root, 10)
root = insert(root, 2)
inOrder(root)