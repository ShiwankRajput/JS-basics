/* 

Async-await ---> 

async-await >> promises >> callback-hell

async function myFun() {
    .....
}

1) It is the advancement to promises concept.
2) async function always return a promise and, await pauses the execution of its surrounding async function until the promise is settled and it is used only within async function

*/

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username : "hello",
                password : "123@"
            })
        }
        else{
            reject('ERROR : error occured')
        }
    },1000)
});

async function consumePromise(){  //async do not catch an error so we use try-catch block, which is a drawback
    try{
        const response1 = await promiseFive
        console.log(response1);

        const response2 = await promiseFive
        console.log(response2);
    }
    catch(error){
        console.log("E:" , error);
    }
}

consumePromise()




// <-------------------------------->

function getData1(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success")
        },2000)
    })
}

async function getAllData(){
    await getData1(1);
    await getData1(2);
    await getData1(3);
    await getData1(4);
}

getAllData();




// <---- Concept of IIFE in async function so that here we do not call it unncessary  ---->

function getData1(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success")
        },2000)
    })
}

(async function getAllData(){
    await getData1(1);
    await getData1(2);
    await getData1(3);
    await getData1(4);
}) ();
