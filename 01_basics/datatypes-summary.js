//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive datatype), Heap(Non-primitive datatype)
// In stack variable ki copy di jati hai and in heap reference dete hai

let myyoutubename = "narucodingdotcom"
let anothername = myyoutubename
anothername = "narugangsterdotcom"

console.log(myyoutubename)
console.log(anothername)

let userOne={
    email: "adityanaru2155@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "naru654523@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

