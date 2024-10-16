/*  
    map method -> 
*/

const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr
                .map((num) => (num*10))
                .map((num) => (num+1) )
                .filter((num) =>(num>=40) )
console.log(newArr);    



//calculating sum 
const arr1 = [10,20,30,40,50]
let sum = 0;
const sumVal = arr1.map(function(num){
    return sum = sum + num
})
console.log(`Sum of values in array > ${sum}`);
console.log(sum);


//updating values of array 
const arr3 = [1,2,3,4,5,6]
const val = arr3.map(function(num){
    return num+2
})
console.log(`new array becomes > ${val}`);
console.log(val);