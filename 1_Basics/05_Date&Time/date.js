// Date => date is an object.

let myDate = new Date()
console.log(myDate);  //represents current date and time.
console.log(myDate.toString());  //reprents current date and time in string
console.log(myDate.toLocaleString());  //represents cureent date and time
console.log(myDate.toLocaleDateString());  //represents current date
console.log(myDate.toLocaleTimeString());  //represents current time
console.log(myDate.toJSON());  //it is a default value, by default date&time is show in this
console.log(myDate.toISOString());  //just like JSON
console.log(myDate.getDate());  //used to get current date
console.log(myDate.toUTCString());   //Sun, 15 Sep 2024 08:17:13 GMT, stands for greenwich mean time


//lets create our own date...
let myCeateddate = new Date(2023,0,24,5,3,23)  // (year,month,date,hours,min,ms), where month starts from 0 in javaScript.
console.log(myCeateddate.toString());
console.log(myCeateddate.toDateString());

let specificDate = new Date("2020-01-17")  // creating own date using ("YYYY-MM-DD") format, but here month starts from 01 not 00 because this is not a array type where it starts from 00.
console.log(specificDate.toLocaleString());

let myspecificDate = new Date("01-18-2021")  // in ("MM-DD-YYYY") format, usually followed in India
console.log(myspecificDate.toLocaleString());