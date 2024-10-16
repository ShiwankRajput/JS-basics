function sayMyName(){    // (=>  ye hai function ki definiton)

    console.log("hello world!");
    console.log("Shiwank");
}
//sayMyName  (=> ye hogye function ka reference)
sayMyName()   // (=> ye hogya function calling)



function addTwoNUmber(number1,number2){    //no need to provide the datatype of parameters
    let result = number1 + number2
    console.log(result);
}
addTwoNUmber(3,"4")
addTwoNUmber(3,"a")
const result = addTwoNUmber(3,4)    //function ne kuch return nhi kiya isliye result ki value undefined aayegi
console.log("result -> ", result);



function subTwoNumber (number1,number2){
    return number1-number2
}
const ans = subTwoNumber(7,3)
console.log(ans);



function validUser(username){
    return `${username} just logged in`
}
console.log(validUser());    //undefined just logged in
console.log(validUser("Shiwank"));


function User(username = "Sam"){ //default value
    return `${username} just logged in`
}
console.log(User());    //Sam just logged in
console.log(User("Shiwank"));


//varArgs in javaScript
function myCart(val1,val2,...number){
    return number
}
console.log(myCart(200,300,4000,100,156));  //return an array,here 200 and 300 are val1 and val2 respectively. So we return vlaue from 4000



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//function with objects...
const user = {
    name : "shiwank",
    age : 20,
}

function specificData(profile){
    console.log(`username is ${profile.name} and age is ${profile.ages}` )
    //username is shiwank and age is undefined.
}

specificData(user)  
// (OR) - here we can also pass the user object directly
specificData({
    name : "Rajput",
    age : 21
})


//function with array

function myData(myArr){
    return myArr[2]
}

const arr = [100,200,300,400,500,600]
console.log(myData(arr));
console.log(myData([200,400,600,800,1000]));