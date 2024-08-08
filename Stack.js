// Create a class called Stack. It should have a method to push, pop and peek

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Method to push an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Method to pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Method to peek the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to get the size of the stack
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); 
  console.log(stack.pop());  
  console.log(stack.peek()); 
  console.log(stack.size()); 
  