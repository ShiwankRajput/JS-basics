/*

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);   //value of PI cannot be over-written

*/

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

const user = {
    name : "Shiwank",
    email : "shiwank123@gmail.com",
    isLoggedIn : true,
    getId : function(){
        console.log("not getting id");
    }
}

console.log(user);

console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name",{
    writable : false,
    enumerable : false   //enumerable means itearable
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (let [key,value] of Object.entries(user)) {  //in this iteration name will not be iterable because its enumarable property is false.
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}