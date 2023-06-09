[&larr; Back](./../README.md)

# Stacks

A [**Stack**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack) is a linear data structure which contains an ordered set ot data.

**Stacks** follow the "Last-In-First-Out" (LIFO) principles, meaning the element added last will be removed first.

A Stack is a linear collection of nodes that adds (pushes) data to one end of the data structure, and removes data (pops) from the same end of the data structure.

_Stacks provide three methods for interaction:_

- **Push** - adds data to the "top" of the stack
- **Pop** - returns and removes data from the "top" of the stack
- **Peek** - returns data from the "top" of the stack

<br>

## Stack Implementation

Stacks can be implemented using a linked list as the underlying data structure.

- The "top" of the stack is equivalent to the "head" node,
- The "bottom" of the stack is equivalent to the "tail" node.

_Optional Constraint:_ the stack size.

- Attempting to push data onto an already full stack will result in a **stack overflow**.
- If you attempt to pop data from an empty stack, it will result in a **stack underflow**.

Stacks are useful in various applications, such as managing function call stacks, evaluating expressions, and implementing algorithms like depth-first search.

<br>

## Stacks and JavaScript

<details>
<summary>Node</summary>

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) throw new Error();
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}
```

<br>

</details>

<details>
<summary>Linked List</summary>

```js
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const nextNode = new Node(value);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) this.head.setNextNode(currentHead);
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;
    if (removedHead.next) this.head = removedHead.next;
    return removedHead.data;
  }
}
```

<br>

</details>

<br>

```js
class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error("Stack is empty");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

const stack = new Stack();
```

<br>

## Simpler Example

Generated by GPT

```js
class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element onto the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an element off the top of the stack
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Get the top element of the stack
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack
  print() {
    return this.items.toString();
  }
}

const stack = new Stack();
```

<br>
