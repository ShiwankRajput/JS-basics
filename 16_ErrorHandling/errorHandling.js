/*

ERROR HANDLING --->

try-catch :

try {

... normal code

} catch ( err ) { //err is error object

... handling error

}


*/


let a = 10
let b = 5

console.log("a+b -> ", a+b);
try{
    console.log("a+c -> ", a+c);
}
catch(err){
    console.log("Error has been caught -> ", err);
}