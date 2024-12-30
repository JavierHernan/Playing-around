// let root = [1,2,3,4,5,6]
const root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        
    },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 5, left: null, right: null },
    },
};
//   1
// 2   3
//4   5 6

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

function invertTree(root) {
    const queue = new Queue(root);
    
    queue.enqueue(root)
    console.log("queue", queue)
    while(!queue.isEmpty()){
        let currentLevel = []
        const levelSize = queue.items.length;
        console.log("levelSize", levelSize)

        for(let i = 0; i < levelSize;i++){
            const node = queue.dequeue()
            console.log("node", node)
            currentLevel.push(node.val)
            // console.log("TEST", currentLevel)
            if(node.left) queue.enqueue(node.left)
            if(node.right) queue.enqueue(node.right)
        }
    console.log("currentLevel", currentLevel)
    }
}

invertTree(root)