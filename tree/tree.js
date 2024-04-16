class Node {
    constructor(value) {
      this.value = value;
      this.parent = null;
      this.children = [];
    }
  
    addChild(node) {
      this.children.push(node);
      node.parent = this;
    }
}


class Tree {

    constructor() {
      this.root = null;
    }
  
    addRoot(value) {
      this.root = new TreeNode(value);
    }
  
    addNode(parentNode, value) {
      const newNode = new TreeNode(value);
      parentNode.addChild(newNode);
      return newNode;
    }

    dfsPreorder(node = this.root, callback) {
        if (!node) return;
        callback(node);
        for (const child of node.children) {
          this.dfsPreorder(child, callback);
        }
    }
    
    dfsInorder(node = this.root, callback) {
        if (!node) return;
        for (const child of node.children) {
          this.dfsInorder(child, callback);
        }
        callback(node);
    }
    
    dfsPostorder(node = this.root, callback) {
        if (!node) return;
        for (const child of node.children) {
          this.dfsPostorder(child, callback);
        }
        callback(node);
    }
    
    bfs(callback) {
        if (!this.root) return;
        const queue = [this.root];
        while (queue.length > 0) {
          const node = queue.shift();
          callback(node);
          queue.push(...node.children);
        }
    }

  }


