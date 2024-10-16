FullName = "shiwank";
console.log(FullName);

age = 20;
console.log(age);

price = 99.99;
console.log(price);

a = null;
console.log(a);

b = undefined;
console.log(b);

//javascript is dynamically type..
FullName = 21;
console.log(FullName);

//let,const,var ki kahani

let name = "shiwank";
name = "SHIWANK"
console.log(name);
let personAge;
console.log(personAge);

const PI = 3.14;
// PI = 3.145;
console.log(PI);
// const e;
// console.log(e);

var pri = 30.12;
var pri = 32.232;
var pri = 68.33;
console.log(pri);
//here problem occurs due to same variable name so we do not generally use var in javaScript...


//dataTypes ki kahani..
let c = "Rajput";
console.log(typeof c);
let d = 45.45;
console.log(typeof d);
let e = true;
console.log(typeof e);
let f = null;
console.log(typeof f);
let g = BigInt("123");
console.log(g);
console.log(typeof g); 
let h = Symbol("hello!")
console.log(h)
console.log(typeof h);
let i = undefined;
console.log(typeof i);

//object creation..
const Student = {
    Name : "Shiwank Kumar",
    age : 20,
    cgpa : 8.3,
    isPass : true
};

console.log(Student);
console.log(typeof Student);
console.log(Student.Name);//or
console.log(Student["Name"]);

Student["Name"] = "Shiwank";
console.log(Student.Name);