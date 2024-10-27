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