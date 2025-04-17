# //          1
# //      2       3
# //    4       5    6
# //              7
tree = {
    1: [2,3],
    2: [4, None],
    3: [5, 6],
    4: [],
    5: [None, 7],
    6: [],
    7: []
}

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, el):
        self.items.push(el)
    
    def dequeue(self):
        return self.items.shift()

    def isEmpty(self):
        return self.items.length == 0

# python3 play-file2.py