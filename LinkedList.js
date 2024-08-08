/* create a class called LinkedList. It should have a head and tail property. It should have an instance method called
 append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a 
given index */

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    insertAt(index, value) {
      if (index < 0) {
        throw new Error("Index must be a non-negative integer");
      }
  
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
          this.tail = newNode;
        }
        return;
      }
  
      let current = this.head;
      let currentIndex = 0;
  
      while (current && currentIndex < index - 1) {
        current = current.next;
        currentIndex += 1;
      }
  
      if (!current) {
        throw new Error("Index out of range");
      }
  
      newNode.next = current.next;
      current.next = newNode;
  
      if (!newNode.next) {
        this.tail = newNode;
      }
    }
  }
  
  // Example usage:
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  ll.insertAt(1, 4); // Linked list becomes 1 -> 4 -> 2 -> 3
  
  console.log(JSON.stringify(ll, null, 2));
  