// Datatypes are of two types: primitive and non-primitive.


/* primitive : these are basically call by value. This means that memory location or reference is not provided, we generaly provided as a copy of that value to another variable.
these are of 7 types: String,Number,Boolean,undefined,null, Symbol, BigInt. */
//Symbols gives us unique value.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false
//bigInt are used for storing big integer values,
const bigNumber = 66378623467814104614614464334563n
console.log(bigNumber);




/* Non-primitive(reference)
these are of different types => Arrays,objects,Functions */  



// stack memory(primitive), heap memory(non-primitive)
//primitive....
let username="shiwank"
let profilename = username
console.log(profilename);
profilename = "rajput"
console.log(username);  //shiwank
console.log(profilename);  //rajput

//non-primitive....
const userOne = {
    email : "shiwank@gmail.com",
    age : 20
};

const userTwo = userOne;
console.log(userOne);
console.log(userTwo);

userTwo.email = "rajput123@gmail.com"
console.log(userOne);
console.log(userTwo);
