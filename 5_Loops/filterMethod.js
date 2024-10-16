const arr = ["java","python","ruby","javascript","cpp"]

const arr1 = arr.forEach( (val) => {  //forEach loop does not return a value.
    return val
})
console.log(arr1);




// --------------------------------------------- 




/* 
    filter method ->
*/
                   

const arr2 = [1,2,3,4,5,6,7,8,9]
const arr3 = arr2.filter((val) => {
    return  val>4
})
console.log(arr3);


const arr4 = []
arr2.forEach( (val) => {
    if(val>4){
        arr4.push(val)
    }
} )
console.log(arr4);



//developing library system
console.log("<----- Library System -----> ");
const books = [
    {
        name:"book one",
        genre:"history",
        publish:1987,
        edition:2002
    },
    {
        name:"book two",
        genre:"fiction",
        publish:2000,
        edition:2010
    },
    {
        name:"book three",
        genre:"non-fiction",
        publish:1999,
        edition:2015
    },
    {
        name:"book four",
        genre:"social",
        publish:2005,
        edition:2020
    },
]

console.log("ALL BOOKS > ");
const userbooks = books.filter( (bk) => {
    return bk
})
console.log(userbooks);

console.log("BOOKS WITH SPECIFIED HISTORY GENRE >");
const userbook = books.filter( (bk) => {
    return bk.genre === "history"
})
console.log(userbook);


console.log("BOOKS WITH GENRE FICTION AND WHICH IS PUBLISH AFTER 2000-> ")
const userbk = books.filter( (bk) => {
    return bk.genre === "fiction" && bk.publish>2000
})
console.log(userbk);

