//do layerTree again with the queue but with a graph:
const root = {
    1: [2,3],
    2: [4, null],
    3: [5,6],
    4: [],
    5: [],
    6: []
}

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(el) {
        this.items.push(el)
    }
    dequeue() {
        //if isEmpty is true, return error
        if(this.isEmpty()) {
            console.log("QUEUE IS EMPTY")
            throw new Error("QUEUE IS EMPTY")
        }
        return this.items.shift();
    }
    isEmpty() { //returns true if there are 0 el's in items
        return this.items.length === 0;
    }
}

function graphLayerTree(root) {
    const queue = new Queue()
    queue.enqueue(root)
    console.log("root", queue)
    while(!queue.isEmpty()) {
        let currentLevel = []
        let levelSize = queue.items.length
        for(let i = 0; i < levelSize; i++) {
            const node = queue.dequeue()
            currentLevel.push(node)

            const children = root[node]

            // if(node[0]) queue.enqueue(node[0])
            // if(node[1]) queue.enqueue(node[1])
            if(children) {
                for(let child of children) {
                    if (child !== null) { // Skip null children
                        queue.enqueue(child);
                    }
                }
            }
        }
        console.log("currentLevel", currentLevel)
    }
}

graphLayerTree(root)