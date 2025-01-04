//Take arrays, turn them into 1 string
let array1 = [1, 2, 3]
let array2 = ["apple", "banana", "grape"]
let array3 = ["car", "+"]

let bigArr = [array1, array2, array3]

// function toOneString(arg) {
//     // console.log("ARG", arg)
//     let finalArr = []
//     for(let i = 0; i < arg.length; i++) {
//         let currentArr = arg[i]
//         for(let j = 0; j < currentArr.length; j++) {
//             finalArr.push(currentArr[j])
//         }
//     }
//     console.log(finalArr.toString())
//     return finalArr.toString()
// }
// // console.log("function", toOneString(bigArr))
// toOneString(bigArr)


// console.log(array1.toString() + "," + array2.toString() + "," + array3.toString())

// let toOneString = (arg) => {return arg.toString()}
let toOneString = (array1, array2, array3) => {return array1.toString() + "," + array2.toString() + "," + array3.toString()}


console.log(toOneString(array1, array2, array3))