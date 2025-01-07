//hash map
//for in ... THESE ARE USED FOR OBJECTS
//for of ... THESE ARE USED FOR ARRAYS
//if in

//iterate through an array, keep track of repeating elements in array using a hashmap
//then return object el with highest count
let arr = [1,1,2,3,4,4,4,5,6,7,7,7,7,8,9,9];
let hashMap = {}
// let hashMap = {
//     key1: "val1",
//     key2: "val2",
//     key3: "val3"
// }

// for(let key in hashMap) {
//     console.log("key", key)
//     console.log("hash[key]", hashMap[key])
// }

const repeatCountFunc = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log("arr[i]", arr[i])
        if(!hashMap[arr[i]]) {
            hashMap[arr[i]] = 1
        } else {
            hashMap[arr[i]] += 1
        }
    }
    // console.log("hashMap", hashMap)
    for(let count in hashMap) {
        console.log("count", count)
    }
}

repeatCountFunc(arr)