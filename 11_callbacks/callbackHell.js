//callback hell --> nested callbacks stacked below one another forming a pyramid structure (pyramid of Doom).

//This style of programming becomes difficult to understand and manage.
//this problem of callback hell is corrected by using promises.

//here, we are fetching data contionously one after the another in a particular period of time.




function datafetch(dataId,getNextdata){
    setTimeout(function(){
        console.log(dataId);
        if(getNextdata){
            getNextdata();
        }
    },2000)
}


datafetch(1,function(){
    console.log("getting data 2")

    datafetch(2,function(){
        console.log("getting data 3")

        datafetch(3,function(){
            console.log("getting data 4")
            datafetch(4);
        })
    });
});
