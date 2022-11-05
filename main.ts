import SinglyLinkedList from "./SinglyLinkedList";
function main (){
    const list = new SinglyLinkedList();
    list.append("Monday");
    list.append("Tuesday");
    list.append("Wednesday");
    list.prepend("Thursday ")
    console.log(JSON.stringify(list));
}
main();