//various methods of numbers...

const score = 400
console.log(score);

// 1) toString(), converts a number to string value...
const balance = new Number(200)
console.log(balance);
console.log(balance.toString().length);

// 2) toFixed(), it decides the values after decimal point..
const b = 300
console.log(b.toFixed());

// 3) toPrecision(), means round off lena values ka..
const otherBalance = 123.678
console.log(otherBalance.toPrecision(3));

//4) toLocaleString, converts the number in comma form to represents the zeros. By default it represents in the US form but we can convert it into Indian form.
const c = 1000000
console.log(c.toLocaleString()); //default
console.log(c.toLocaleString('en-IN'));  //in Indian form