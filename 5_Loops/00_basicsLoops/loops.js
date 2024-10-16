/* 
    for loop :->
*/

console.log("For loop prins => ")
for(let i=1; i<=5; i++){
    console.log(i);
}


/* 
    while loop :->
*/

console.log("While loop prints => ")
let j=1
while(j<=5){
    
    if(j==2){
        j++
        continue
    }
    else{
        console.log(j);
        j++
    }
    
}


/* 
    do-while loop :->
*/

console.log("Do-while loop => ");
let k=1
do{
    console.log(k);
    k++
}while(k<=5);




/*
    for-of loop :->
*/

console.log("For-of loop => ")
const name = "Shiwank Rajput"
for (const alpha of name) {
    console.log(alpha);
}



/*
    for-in loop :->
*/

console.log("for-in loop => ")

//iterating obj => obj cannot be iterable using for-of loop
const obj={
    name : "shiwank",
    age : 21
}

// for (const i of obj) {          //using for-of loop (cant't be iterable)
//     console.log(i);
// }

for (const i in obj) {          //iterating using for-in loop
   console.log(`${i} -> ${obj[i]}`)
}

const arr1 = [10,20,30,40]
for (const i in arr1) {
   console.log(i);
}



/*
    for-each loop :->
*/

const arr3 = ["java","python","cpp","js"]

arr3.forEach(function(item){
    console.log(item);
})
//OR
arr3.forEach((item)=>{
    console.log(item);
})
//OR
arr3.forEach(print)
function print(item){
    console.log(item);
}
//OR
arr3.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

const lang = [
    {
        language : "java",
        filename : "java"
    },
    {
        language : "pyhton",
        filename : "py"
    },
    {
        language : "javascript",
        filename : "js"
    }
]

lang.forEach((item) => {
    console.log(`${item.language} and ${item.filename}`)
})

lang.forEach((item) => {
    console.log(item);
})