//          1
//      2       3
//    4       5    6
//              7
let tree = {
    1: [2,3],
    2: [4, null],
    3: [5, 6],
    4: [],
    5: [null, 7],
    6: [],
    7: []
}
//print each layer, use bfs. Also, print # of el's in each layer

//build out queue class first first. Include enqueue(), dequeue, and isEmpty
//a class must take this.items in constructor. methods go after constructor and are modifying this.items


//
class Queue {
    constructor() {
        this.items = []
    }
    enqueue(el) { //adds item to items
        this.items.push(el)
    }
    dequeue() { //removes last item 
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

function printEveryLayer(tree, start) {
    //new instance of Queue
    const queue = new Queue()
    
    //add tree to queue via enqueue... DO NOT. Add start point.
    let root = start
    queue.enqueue(root)
    // queue.enqueue(tree)

    const layerCount = []

    //loop over queue while queue is not Empty
    while(!queue.isEmpty()) {
        //
        let currentLevel = []
        let levelSize = queue.items.length;
        layerCount.push(levelSize)
        // console.log("TEST", layerCount)
        for(let i = 0; i < levelSize; i++) {
            const node = queue.dequeue()
            currentLevel.push(node)
            let children = tree[node]
            if(children) {
                for(let child of children) {
                    if(child != null) {
                        queue.enqueue(child)
                    }
                }
            }
        }
        console.log("currentLevel", currentLevel)
    }
    console.log("layerCount", layerCount)
}

printEveryLayer(tree, 1)
// node play-file1.01.js