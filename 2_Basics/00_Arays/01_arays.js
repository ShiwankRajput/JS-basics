//  //Arrays...basics
 
//  const arr1 = [10,20,30,40,50]
//  console.log(arr1[3]);

//  const arr2 = new Array(10,20,30,40)
//  console.log(arr2[1]);

//  //Arrays methods....

//  arr2.pop()
//  arr2.push(50)
//  arr2.push(60)
//  arr2.pop()
//  console.log(arr2);

//  arr2.unshift(5)  //it adds 5 in the begining of the array and then shifting array towards right
//  console.log(arr2)

//  arr2.shift()
//  arr2.shift()   //it shift array towards left by removing elements.
//  console.log(arr2)

//  console.log(arr2.includes(9));  //false,therefore returns boolean
//  console.log(arr2.indexOf(56));  //returns -1 if not presents.
//  console.log(arr2.indexOf(30));

//  //+++++++++++++++++++++++++++++++++++++
//  const arr3 = arr2.join()
//  console.log(arr2);
//  console.log(typeof(arr2));  //object
//  console.log(arr3);
//  console.log(typeof(arr3));  //string

const arr4 = [0,1,2,3,4,5]
console.log("A", arr4);
const arr5 = arr4.slice(1,3)
console.log(arr5);   //here index 3 value is not included.
console.log("B", arr4);   //no change in array after slice....therefore it temporary deletes the slicing elements.
const arr6 = arr4.splice(1,3)
console.log(arr6);  //here index 3 value is also included.
console.log("C", arr4);  //there is a change...therefore splice removes the elemets in array.
