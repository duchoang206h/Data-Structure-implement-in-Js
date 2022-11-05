class NODE {
    public element: String;
    public next: NODE | null;
    constructor(element: String){
        this.element = element;
        this.next = null;
    }
}
class SinglyLinkedList{
    private head: NODE | null;
    private tail: NODE | null;
    private size: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    append(element: String){
        const newNode = new NODE(element)
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
        }else{
            if(this.tail !== null){
                this.tail.next = newNode;
                this.tail = newNode;
            }

        }
        this.increaseSize()
    }
    prepend(element: string){
        const newNode = new NODE(element)
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.increaseSize()
    }
    increaseSize(){
        this.size ++;
    }
}
export default SinglyLinkedList;