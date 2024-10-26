//note: The function that passes within another function as an argument then that function is called as callback function. 

function sum(a,b){
    console.log(a+b)
}

function calculate(a,b,add){
    add(a,b);
}

calculate(1,2,sum);  //reference of the function is being passed as an argument.


//or
calculate(1,2,function(a,b){
    console.log(a+b);
})