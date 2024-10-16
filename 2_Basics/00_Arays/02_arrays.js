const marvel_heros = ["thor","captain America","IronMan"]
console.log(marvel_heros);
const dc_heros = ["superman","flash","batman"]
console.log(dc_heros);


// const a = marvel_heros.push(dc_heros)    //do not return, adds to existing array.
// console.log(marvel_heros);
// console.log(a);    //here it is giving length after pushing array in marvel_heros


const b = marvel_heros.concat(dc_heros)    //concat and returns a new array, so here we need to store it into new variable.
console.log(b);


//spread method (eg => kaach ka glass le aur floor pr fekhh de woh spread ho jyega)
const c = [1,2,3,4]
const d = [5,6,7]
const e = [8,9]
const f = [...c,...d,...e]   //using(...) individual element of an array seperates.
console.log(f);


//flat method(agar koi array ke andr array hai toh hum usse ek simple array mai convert kr skte hai using flat method..)
const complex_arr = [1,2,3,[4,5,6],[7,8,[9,10,11,12]]]
const simple_arr = complex_arr.flat(2)  //here 2 is depth to flat an array, we can also pass an infinity in respect with 2.
console.log(simple_arr);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// jb hum kisse website se koi data fetch krte hai toh hum check aur uss chiz ko convert kr skte hai ek array mai,uske liye hum different method ka use krte hai

console.log(Array.isArray("shiwank"));  //false(checks whether this is an array or not)
console.log(Array.from("shiwank"));   //from converts the element into an array,thus we can only pass a single element.

let g = 100
let h = 200
let i = 300
console.log(Array.of(g,h,i));  //of creates an array with different variables or elements

console.log(Array.of("shiwank","Rajput","kese ho"));
