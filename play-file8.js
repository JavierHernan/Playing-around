//Sorts

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function randomSortArr(arr) {
    let newArr = []; // Array to store the randomly sorted result
    newArr.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let beforeSpotRep = Math.floor(Math.random() * 100000); // Random number 1
        let currentValRep = Math.floor(Math.random() * 100000); // Random number 2

        // Compare the two random numbers
        if (beforeSpotRep > currentValRep) {
            const beforeSpot = newArr.slice(0, i - 1); //insert val
            const afterSpot = newArr.slice(i - 1);     //insert val
            newArr = [...beforeSpot, arr[i], ...afterSpot]; // rebuild arr with inserted vals
        } else {
            newArr.push(arr[i]);
        }
    }

    // console.log("Final sorted newArr:", newArr);
    return newArr;
}
const thisArr = randomSortArr(arr)
// console.log("thisArr", thisArr)
//function that invokes randomSortArr 100 times
function randomInvocation(arr) {
    // let hundred = 100;
    let currentArr = arr;
    for(let i = 0; i < 1000; i++) {
        currentArr = randomSortArr(arr)
        console.log("currentArr", currentArr, i)
        i++
    }
    return currentArr;
}

// randomInvocation(thisArr)
let starterArr = randomInvocation(thisArr)
console.log("starterArr", starterArr)

//Insert
//use 2 arrays
let insertArr = [2,1,3,4,0,6,5,7,9,8]
function InsertFunc(arr) {
    let copyArr = arr
    let sortedArr = []
    while(copyArr.length > 0) {
        for(let i = )
    }
    console.log(copyArr)
}
InsertFunc(insertArr)

//Bubble

//Merge

//Quick

//Select

//Shell


// node play-file8.js