class Queue{
    constructor(){
        this.data = [];
    }
    enqueue(value){
        this.data.push(value);
    }
    dequeue(){
        if(this.isEmty()) return null;
        return this.data.shift();
    }
    isEmty(){
        return this.data.length == 0;
    }
}