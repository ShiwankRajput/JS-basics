//object using constructor..
const obj = new Object()


//nested objects...
const user = {
    email : "shiwank@gmail.com",
    fullName : {
            userName : {
                FirstName : "shiwank",
                lastName : "Kumar"
            }
    },
    age : 20 
}

console.log(user.fullName);
console.log(user.fullName.userName);
console.log(user.fullName.userName.FirstName);


//merging objects...
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
const obj4 = Object.assign(obj1,obj2,obj3)  //OR   const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj1);
console.log(obj4);

    //OR

const obj5 = {...obj1,...obj2,...obj3} 
console.log(obj5);   


//Array with objects...
const arr1 = [
    {
        id : 101,
        email : "s@gamil.com"
    },
    {
        id : 102,
        email : "t@gmail.com"
    }
]
console.log(arr1[0]);
console.log(arr1[1].email);


//different other methods...
const tinderUser = {
    age:20,
    name:"shiwank",
    email:"shiwank@gmail.com"
}

console.log(Object.keys(tinderUser));   //returns array of keys
console.log(Object.values(tinderUser));  //return array of values
console.log(Object.entries(tinderUser));  //return array within array with key-value pair

console.log(tinderUser.hasOwnProperty("email"));   //true
console.log(tinderUser.hasOwnProperty("isLoggedIn"));   //false



//extracting value or accessing value from objects..
//kiski bhi value ka de-structure krna while accessing the element
const course = {
    name : "Shiwank",
    id : 302,
    courseIntructor : "Sanjeev Mehta"
}

const {courseIntructor:instructor} = course     //courseInstructor ka de-structure hora hai kisse dusre value mai...therefore,jbb bhi curly braces dekho toh mtlb hai de-structuring krre jaare hai
console.log(courseIntructor);



//JSON API
//JSON is just like an object in which keys are gennerally string type...
/* {
        "name" : "string",
        "email" : "your-email",
        "age" : 20,
   } */

   
//JSON sing array...
/* [
        {},
        {},
        {}
   ] */   