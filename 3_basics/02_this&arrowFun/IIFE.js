//Immediately invoked function expression (IIFE)

/*

Syntax :
(function_definiton)(function_call);

*/

(function one(){
    //named IIFE
    console.log("DB connected");
}) ();   //semicolon use krte hai function ko end krne ke liye wrna ye chlta hi rhega



((name) => {
    console.log(`Hey ${name} welcome to JavaScript`);
})("shiwank");
