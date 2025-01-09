//Linked List
//set up a node class for linked list
//set up linked list class

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(val) {
        //create new node
        const newNode = new Node(val)

        //if no head of THIS LL
        if(!this.head) {
            this.head = newNode;
            return
        }
        //start at head and loop to end of LL to append newNode
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    removeLast(val) {
        //if no head, return error
        if(!this.head) {
            return new Error("There is no head of this Linked List")
        }

        //start at head, loop to end, then return the modified LL
        let result = []
        let current = this.head;
        while(current.next) {
            result.push(current.value);
            current = current.next;
        }
        let newResult = result.pop()
        current = null;
        console.log("new Linked List", newResult.join(" -> "))
    }
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value); // Collect node values in an array
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

const firstList = new LinkedList();
firstList.append(1);
firstList.append(2);
firstList.append(3);
firstList.print() //needs debugging
//