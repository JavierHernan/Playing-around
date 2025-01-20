//Sorts

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function randomSortArr(arr) {
    let newArr = []; // Array to store the randomly sorted result

    // Initialize the first element of the new array with the first element of the input array
    newArr.push(arr[0]);

    // Iterate through the rest of the elements in the original array
    for (let i = 1; i < arr.length; i++) {
        let beforeSpotRep = Math.floor(Math.random() * 100000); // Random number 1
        let currentValRep = Math.floor(Math.random() * 100000); // Random number 2

        // Compare the two random numbers
        if (beforeSpotRep > currentValRep) {
            // If the condition is true, insert the current element into the middle of newArr
            const beforeSpot = newArr.slice(0, i - 1); // Elements before the insertion point
            const afterSpot = newArr.slice(i - 1);     // Elements after the insertion point
            newArr = [...beforeSpot, arr[i], ...afterSpot]; // Rebuild the array with the inserted value
        } else {
            // If the condition is false, append the current element to newArr
            newArr.push(arr[i]);
        }
    }

    console.log("Final sorted newArr:", newArr);
    return newArr;
}
const thisArr = randomSortArr(arr)
console.log("thisArr", thisArr)
//Insert

//Bubble

//Merge

//Quick

//Select

//Shell