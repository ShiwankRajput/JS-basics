//if statement

//if-else statement :

let age=17;
if(age>=18){
    console.log("person can vote");
}
else{
    console.log("person cannot vote");
}

//else if statement :

let number=5;

if(number<0){
    console.log("negative number");
}
else if(number>0){
    console.log("positive number");
}
else{
    console.log("zero");
}


//ternary operator
let num=25;
let result = num>=18?"adult":"not adult";
console.log(result);