//arithmetic operators :
let a=5;
let b=3;
 
// console.log("a=",a,"and b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("axb=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a^b=",a**b);

//unary operator :

// console.log("a++ = ",a++); //5
// console.log("++a = ",++a); //7
// console.log("b-- = ",b--); //3
// console.log("--b = ",--b); //1

//asignment operator : =,+= ,-= ,/=, %=, **=

//comparison operators : ==,!=,===, !==, >, <, <=, >=

let c = "5";
console.log("a==b",a==b); //false
console.log("a!=b",a!=b); //true
console.log("a==c",a==c); //true as c converts to number in javascript not in other programming language.so in this case we use strict version of equals too and not equals too.
console.log("a===c",a===c); //false
console.log("a!==c",a!==c); //true


//logical operator : &&, ||, !

let gameCounter = 100;
let t = gameCounter++;
console.log(t);  //100
console.log(gameCounter);  //101