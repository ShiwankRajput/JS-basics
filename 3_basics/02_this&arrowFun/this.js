const user = {
    name : "Shiwank",
    age : 20,

    username : function(){
        console.log(`${this.name}, welcome yo JavaScript`);
        console.log(this);   //current context ko return krdega
    } 
    //this currenet context ko refer krta hai
    
}

user.username()
user.name = "Rajput"
user.username()
console.log(this);   //yaha pr object nhi ayega kyunki uski key global declare nhi ki gyi hai thikee.

// (INTERVIEW QUESTION =>) agr console.log(this) global mai krte toh woh {} return krega lekin ager isse hi hum browser pr krte toh waha global toh window hai na toh waha pr this return krega window ko.


//++++++++++++++++++++ interesting ++++++++++++++++++++

function three(){
    let username = "Shiwank"
    console.log(this.username);  //this object mai use hota hai current context ko dikahane ke liye ya phir btane ke liye, toh yaha pr koi username print nhi hoga woh undefined ayega.
    console.log(this);
}

three()