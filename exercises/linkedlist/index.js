// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insertFirst(data) {
    // const node = new Node(data, this.head)
    // this.head = node
    this.head = new Node(data, this.head)
  }

  size() {
    // if (this.head) {
    //   let size = 1
    //   let current = this.head
    //   while (current.next) {
    //     size++
    //     current = current.next
    //   }
    //   return size
    // } else {
    //   return 0
    // }
    let counter = 0
    let current = this.head
    while (current) {
      counter++
      current = current.next
    }
    return counter 
  }

  getFirst() {
    return this.head
  }

  getLast() {
    // let current = this.head
    // while (true) {
    //   if (current.next) {
    //     current = current.next
    //   } else {
    //     return current
    //   }
    // }
    if (!this.head) {
      return null
    }
    let current = this.head
    while (current) {
      if (current.next) {
        current = current.next
      } else {
        return current
      }
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return
    if (!this.head.next) {
      this.head = null
      return
    }
    // let current = this.head
    // while (current) {
    //   if (current.next && !current.next.next) {
    //     current.next = null
    //     return
    //   } else {
    //     current = current.next
    //   }
    // }
    let previous = this.head
    let current = this.head.next
    while (current.next) {
      previous = current
      current = current.next
    }
    previous.next = null 
  }

  insertLast(data) {
    // if (this.head) {
    //   let current = this.head
    //   while (current.next) {
    //     current = current.next
    //   }
    //   current.next = new Node(data)
    // } else {
    //   this.head = new Node(data)
    // }

    // if (!this.head) {
    //   this.head = new Node(data)
    //   return
    // }
    // let current = this.head
    // while (current.next) {
    //   current = current.next
    // }
    // current.next = new Node(data)

    const last = this.getLast()
    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    // if (!this.head) {
    //   return null
    // }
    let i = 0
    let current = this.head
    // while (i < index) {
    //   if (current.next) {
    //     current = current.next
    //     i++
    //   } else {
    //     return null
    //   }
    // }
    // return current
    while (current) {
      if (i === index) {
        return current
      }
      i++
      current = current.next
    }
    return null
  }

  removeAt(index) {
    // if (!this.head) {
    //   return
    // }
    // if (index === 0) {
    //   if (this.head.next) {
    //     this.head = this.head.next
    //   } else {
    //     this.head = null
    //   }
    //   return
    // }
    // let i = 0
    // let current = this.head
    // let previous
    // while (i < index) {
    //   if (current.next) {
    //     previous = current
    //     current = current = current.next
    //     i++
    //   } else {
    //     return
    //   }
    // }
    // previous.next = current.next
    if (index === 0) {
      this.removeFirst()
    } else {
      const previous = this.getAt(index - 1)
      if (!previous || !previous.next) return
      previous.next = previous.next.next
    }
  }

  insertAt(data, index) {
    // const node = new Node(data)
    // if (!this.head) {
    //   this.head = node
    //   return
    // }
    // if (index === 0) {
    //   node.next = this.head
    //   this.head = node
    //   return
    // }
    // let i = 0
    // let current = this.head
    // let previous
    // while (i < index) {
    //   if (current.next) {
    //     previous = current
    //     current = current.next
    //     i++
    //   } else {
    //     current.next = node
    //     return
    //   }
    // }
    // node.next = current
    // previous.next = node
    if (index === 0) {
      this.insertFirst(data)
    } else {
      // const previous = this.getAt(index - 1)
      // if (!previous) {
      //   this.insertLast(data)
      // } else {
      //   previous.next = new Node(data, previous.next)
      // }
      const previous = this.getAt(index - 1) || this.getLast()
      previous.next = new Node(data, previous.next)
    }
  }

  forEach(fn) {
    // let current = this.head
    // while (current) {
    //   fn.call(this, current)
    //   current = current.next
    // }
    let current = this.head
    let counter = 0
    while (current) {
      fn(current, counter)
      current = current.next
      counter++
    }
  }

  *[Symbol.iterator]() {
    let current = this.head
    while (current) {
      yield current
      current = current.next
    }
  }
}

module.exports = { Node, LinkedList };
