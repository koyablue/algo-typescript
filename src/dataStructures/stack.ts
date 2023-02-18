class Stack {
  stack: any[]

  constructor() {
    this.stack = []
  }

  push(data: any) {
    this.stack.push(data)
  }

  pop(): any {
    if (this.stack.length) return this.stack.pop()
  }
}
