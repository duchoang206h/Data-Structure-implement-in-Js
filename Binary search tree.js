class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if(value == currentNode.value) return ;
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}
let newBST = new BinarySearchTree();
newBST.insert(23);
newBST.insert(50);
newBST.insert(32);
newBST.insert(12);
newBST.insert(53);
newBST.insert(43);
newBST.insert(53);
console.log(newBST);
/* 
const app = require("express")();
app.get("/", (req, res) => {
  res.json(newBST);
});
app.listen(3000); */
