/*

You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.

*/


class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("user is viewing the data");
    }
}

let myObj = new user("shiwank","shiwankEg@gmail.com");
console.log(myObj);
myObj.viewData();