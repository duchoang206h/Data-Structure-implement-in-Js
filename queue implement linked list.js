class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0; 
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.size == 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode
        }
        this.size ++;
        return this;
    }
    dequeue(){
        if(this.size == 0) return null;
        const currentNode = this.first;
        this.first = this.first.next;
        this.size --;
        return currentNode
    }

}
let newQueue = new Queue();
newQueue.enqueue("Monday");
newQueue.enqueue("Tuesday");
newQueue.enqueue("Wednesday");
newQueue.dequeue()
console.log(newQueue.enqueue("Thursday"));