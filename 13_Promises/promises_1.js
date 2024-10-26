//INTRODUCTION ---->

//Promises is for "eventually"(rejected or resolved) completion of task.It is an object in Js. It is a solution to callback hell. It have function with two handlers (resolve,reject), where resolve and reject are callbacks provided by js


const promiseOne = new Promise(function(resolve,reject){   //promises takes call back functions
    //Do async task
    //DB calls, cryptography, networks

    setTimeout(function(){
        console.log("Async task1 is completed");
        resolve()  //directly connects with then()
    },2000)
})

//consumption of promises ---> using then() and catch

//then() has direct connection with resolve,aur yaha pr saare values return hoti hai jb humara code successfully run krta hai
promiseOne.then(function(){
    console.log("Promise1 resolved");
})


// <---------------------------------------->
function getData1(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success")
        },4000)
    })
}
//the above is done by the API itself, we only have to use then and catch to handle it.

let a = getData1(1)

a.then((s)=>{
    console.log("promise resolved",s)
    console.log("fetching data 2......")
    let b = getData1(2)
    b.then((r)=>{
        console.log("promise resloved",r)
    })
})


