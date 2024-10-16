let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));   //ms in sec


let myDate = new Date()
console.log(`${myDate.getDate()} and the time is ${myDate.getTime()}` );

//date and time in another form..
console.log(myDate.toLocaleString('default',{
    weekday : "long"
    
}))  //I do not understood this form of date and time (NO : X)