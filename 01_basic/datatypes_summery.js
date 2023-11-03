// primitive data type

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3467436676734674364n

// Reference (non-primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraaj"]
let myObj = {
    name: "abhinav",
    age: 23,
}

const myFunction = function (){
    console.log(("hello world"));
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-primitive)


let myYoutubename = "abhinavdotcom"

let anothername = myYoutubename
anothername = "maiaurchai"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhinav@google.com"

console.log(userOne.email);
console.log(userTwo.email);