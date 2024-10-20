//INTRODUCTION ---->


const promiseOne = new Promise(function(resolve,reject){   //promises takes call back functions
    //Do async task
    //DB calls, cryptography, networks

    setTimeout(function(){
        console.log("Async task1 is completed");
        resolve()  //directly connects with then()
    },2000)
})

//consumption of promises

//then() has direct connection with resolve,aur yaha pr saare values return hoti hai
promiseOne.then(function(){
    console.log("Promise1 resolved");
})



// creating promises

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve()
    },4000)
    
}).then(function(){
    console.log("Promise2 resolved");
})


const PromiseThird = new Promise(function(resolve,raject){
    setTimeout(function(){
        resolve({
            username : "Shiwank",
            email : "Sh@example.com"
        })
    },1000)
})

PromiseThird.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username : "ShiwankRajput",
                password : "123@"
            })
        }
        else{
            reject('ERROR : error occured')
        }
    },7000)
})


promiseFour.then(function(user){  //chaining of then,hence flow moves from top to bottom
    console.log(user);
    return user.username;  //return krke kisse variable mai store krke usko print nhi kara skte hai kyunki woh phir error ya phir print nhi ho payegi mtlb hum usse use mai nhi le payege

}).then(function(username){
    console.log(username);

}).catch(function(error){
    console.log(error);

}).finally(function(){
    console.log("Promise is either resolved or rejected");
})



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
    },8000)
});

async function consumePromise(){  //async do not catch an error so we use try-catch block
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log("E:" , error);
    }
}

consumePromise()



// ------------------------------------------------------------------------------>


// async function getUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/ShiwankRajput')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ' ,error);
//     }
// }

// getUser()



// --------------------------------------------------------------------->

fetch('https://api.github.com/users/ShiwankRajput')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("E: ", error);
})