/*

Arrow Function : 
(1) Remove function keyword
(2) Put => after paranthesis () 
   
*/

const one = () => {
    let username = "Shiwank"
    console.log(this.username);
    console.log(this);   //but yaha pr arrow function use krke hum function ki details nhi jaan pa rhe hai...ye difference hota hai arrow function mai aur normal function.
}

// one()




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//explicit return
// agr curly braces use hua toh return likhna hi pdega
const two = (num1,num2) => {
    return num1+num2
}

console.log(two(3,4));


//implicit return
//agr paranthesis use krte hai toh return likhne ki jrurat nhi hai. 
const three = (num1,num2) => (num1+num2)   

console.log(two(3,4));


const four = () => ({username : "shiwank"})    //agr paranthesis use na kre object ke liye toh undefined ayega.
console.log(four());

