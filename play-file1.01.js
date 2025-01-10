//          1
//      2       3
//    4       5    6
//              7
let tree = {
    1: [2,3],
    2: [4, null],
    3: [5, 6],
    5: [null, 7],
    6: [],
    7: []
}
//print each layer, use bfs.

//build out queue class first first. Include enqueue(), dequeue, and isEmpty
//a class must take this.items in constructor. methods go after constructor and are modifying this.items

//