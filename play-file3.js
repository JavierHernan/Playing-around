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
        let items = []
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
