//FizzBuzz
// let fizz = "Fizz";
// let buzz = "Buzz";
// let fizzbuzz = "FizzBuzz";
// let fiz = "fiz";

// let FizzBuzzFunc = (arg) => {
//     let argFormatted = arg.toUpperCase();
//     // if(argFormatted == "FIZZ") {
//     //     console.log("Fizz")
//     // } else if (argFormatted == "BUZZ") {
//     //     console.log("Buzz")
//     // } else if (argFormatted == "FIZZBUZZ") {
//     //     console.log("FizzBuzz")
//     // }
//     argFormatted == "FIZZ" ? console.log("Fizz") 
//   : argFormatted == "BUZZ" ? console.log("Buzz")
//   : argFormatted == "FIZZBUZZ" ? console.log("FizzBuzz")
//   : null
// }
// let try1 = FizzBuzzFunc(fizz)
// let try2 = FizzBuzzFunc(buzz)
// let try3 = FizzBuzzFunc(fizzbuzz)
// let try4 = FizzBuzzFunc(fiz)


// True FizzBuzz
// If divisible by 3, Fizz
// If divisble by 5, Buzz
// If divisble by 5 and 3, FizzBuzz

let FizzBuzzFunc = (arg) => {
  if(arg % 3 === 0 && arg % 5 === 0) {
    return "FizzBuzz"
  } else if(arg % 3 === 0) {
    return "Fizz"
  } else if (arg % 5 === 0) {
    return "Buzz"
  }
}
console.log("invocation 1 (15):", FizzBuzzFunc(15))
console.log("invocation 2 (3):",FizzBuzzFunc(3))
console.log("invocation 3 (5):",FizzBuzzFunc(5))


// node play-file9.js