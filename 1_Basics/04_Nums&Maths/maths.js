console.log(Math);
console.log(Math.abs(-5.5));  //5.5
console.log(Math.round(4.5));  //5
console.log(Math.min(4,6,2,7,8));  //2
console.log(Math.max(4,6,34,5,7,));  //34
console.log(Math.ceil(4.4));  //5
console.log(Math.floor(4.4));  //4
console.log(Math.random());  //random value in decimal between 0 and 1.
console.log(Math.floor((Math.random()*10) + 1));  //gives value between 0 and 10.

const min = 10
const max = 20
console.log(Math.floor( ( Math.random() * 10 ) + min ) );  //generates value between 10 and 20 where 10 is inclusive and 20 is exclusive..