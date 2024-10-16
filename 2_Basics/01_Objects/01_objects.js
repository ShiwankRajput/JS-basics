//objects can be created using constructors(which are singleton) by objects.create or can be created simply uisng object literal.


//object literal
const myKey = Symbol("key1")

const user = {
    name : "shiwank",
    age : 20,
    // myKey : "hello",  //yaha pr symbol access nhi hua hai
    [myKey] : "hello",   //yaha pr symbol as a key access hogyi hai
    email : "shiwankkumar@gmail.com",
    isLoggedIn: false,
    available : ["weekends","weekday"]
}

console.log(user);
// console.log(user["myKey"]);   //yaha pr symbol ka pta nhi chalega as a key
console.log(user[myKey]);   //accessing symbol value like this [mykey]

user.email = "shiwank@gmail.com"
console.log(user);
// Object.freeze(user)   //ab koi key change nhi hogi kyuki object freeze hogya hai
user.email = "shiwannnnkrajput@gmail.com"
console.log(user);



//+++++++++++++++++++++++++++++++++++++++++
user.greeting = function(){
    console.log("hello js user");
}
console.log(user.greeting);  //yaha pr function ka reference ara hai
console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(user);
console.log(user.greetingTwo);
console.log(user.greetingTwo());

