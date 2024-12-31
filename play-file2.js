const root = {
    1: [2,3],
    2: [4, null],
    3: [5,6],
    4: [],
    5: [],
    6: []
}

function bfsLayerTree(root) {
    const queueList = []
    queueList.push(root)
    console.log("queueList", queueList)
    while(!queueList.length === 0) {
        let currentLevel = []
        const levelSize = queueList.length;

        // for(let i = 0; i < levelSize; i++) {
        //     const node = qu
        // }
    }
}

bfsLayerTree(root)