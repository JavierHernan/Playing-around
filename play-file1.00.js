// let root = [1,2,3,4,5,6]
//Print each Layer of a Tree, Use BFS
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
        return this.items.shift(); //shift() removes and returns first el in array
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

function layerTree(root) {
    console.log("root", root)
    const queue = new Queue();
    // console.log('queue before enqueue', queue)
    queue.enqueue(root)
    // console.log("queue", queue)
    while(!queue.isEmpty()){
        let currentLevel = []
        const levelSize = queue.items.length; //must capture levelSize before nodes are added in for loop to prevent 
        //accidentally capturing next level of nodes.
        // console.log("levelSize", levelSize)

        for(let i = 0; i < levelSize;i++){ //once done iterating over current level size, while loop re-engages and moves to next levelSize
            const node = queue.dequeue() //dequeue uses shift() which removes/returns first el in array
            // console.log("node", node)
            // console.log("queue2", queue) //this queue will show what's left in queue after shift()
            currentLevel.push(node.val)
            // console.log("TEST", currentLevel)
            if(node.left) queue.enqueue(node.left)
            if(node.right) queue.enqueue(node.right)
        }
    console.log("currentLevel", currentLevel)
    }
}

layerTree(root)
// node play-file1.00.js