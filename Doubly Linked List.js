class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Doubly Linked List
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    isEmty() {
      return this.size === 0;
    }
    append(element) {
      const newNode = new Node(element);
      if (this.size == 0) {
        this.head = newNode;
        this.tail = newNode;
        this.head.next = this.tail;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      ++this.size;
    }
    prepend(value) {
      const newNode = new Node(value);
      if ((this.size = 0)) {
        this.head = newNode;
        this.tail = newNode;
        this.head.next = this.tail;
      }
      newNode.next = this.head;
      this.head = newNode;
      ++this.size;
    }
    insert(value, index){
        if(index>=this.size) this.prepend(value);
        else if(index<=0) this.append(value);
        else{
            const newNode = new Node(value);
            let currentNode = this.head;
            for(let i = 0;i<index-1;i++){
              currentNode = currentNode.next;
            }
            newNode.next =  currentNode.next;
            currentNode.next = newNode;
        }
        ++this.size;
    }
    delete(index){
      let previousNode = this.head;
      for(let i = 0;i<index-1;i++){
          previousNode = previousNode.next;
      }
      let currentNode = previousNode.next;
      previousNode.next = currentNode.next;
      --this.size;
    }
    display(){
        const arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
  }
  let mylinked_list = new LinkedList();
  mylinked_list.append("Monday");
  mylinked_list.append("Tuesday");
  mylinked_list.append("Wednesday");
  mylinked_list.append("Thursday");
  mylinked_list.append("Friday");
  mylinked_list.append("Saturday");
  mylinked_list.append("Sunday");
  mylinked_list.insert("Thu ... ", 2);
  mylinked_list.display()
  mylinked_list.delete(2)
  mylinked_list.display()