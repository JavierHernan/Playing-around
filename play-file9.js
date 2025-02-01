//FizzBuzz
let fizz = "Fizz";
let buzz = "Buzz";
let fizzbuzz = "FizzBuzz";
let fiz = "fiz";

let FizzBuzzFunc = (arg) => {
    let argFormatted = arg.toUpperCase();
    // if(argFormatted == "FIZZ") {
    //     console.log("Fizz")
    // } else if (argFormatted == "BUZZ") {
    //     console.log("Buzz")
    // } else if (argFormatted == "FIZZBUZZ") {
    //     console.log("FizzBuzz")
    // }
    argFormatted == "FIZZ" ? console.log("Fizz") 
  : argFormatted == "BUZZ" ? console.log("Buzz")
  : argFormatted == "FIZZBUZZ" ? console.log("FizzBuzz")
  : null
}
let try1 = FizzBuzzFunc(fizz)
let try2 = FizzBuzzFunc(buzz)
let try3 = FizzBuzzFunc(fizzbuzz)
let try4 = FizzBuzzFunc(fiz)

// node play-file9.js