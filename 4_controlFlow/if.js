const arr = []
if(arr.length==0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("object is empty");
}

//nullish coalescing operator (??) : null undefined
const val = 10 ?? 20
console.log(val);  //10

const val1 = null ?? 10
console.log(val1);  //10

const val2 = undefined ?? 10
console.log(val2);  //10

const val3 = null ?? 10 ?? 20
console.log(val3);  //10


//terniary operator
//condition ? true ? false

const rate = 100
rate <= 80 ? console.log("rate is less than 80") : console.log("rate is more than 80");