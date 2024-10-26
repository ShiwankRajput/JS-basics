async function getUser(){
    try {
        const response = await fetch('https://api.github.com/users/ShiwankRajput')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E: ' ,error);
    }
}

getUser()



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