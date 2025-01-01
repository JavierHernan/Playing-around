const root = {
    1: [2,3],
    2: [4, null],
    3: [5,6],
    4: [],
    5: [],
    6: []
}

function arrayLayerTree(root) {
    const queueList = []
    queueList.push(1)
    // console.log("queueList", queueList)
    // while(queueList.length > 0) {
    while(queueList.length !== 0) {
        let currentLevel = []
        const levelSize = queueList.length;

        for(let i = 0; i < levelSize; i++) {
            const nodeKey = queueList.shift();
            currentLevel.push(nodeKey)
            const children = root[nodeKey];
            if(children) {
                for (const child of children) {
                    if (child !== null) {
                        queueList.push(child); // Add non-null children to the queue
                    }
                }
            }
        }
        console.log("currentLevel", currentLevel)
    }
}

arrayLayerTree(root)