/*

Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.

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

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        console.log("editing the data");
    }
}

const myObj = new Admin("shiwank","shiwank12@gmail.com");
console.log(myObj);
myObj.viewData();
myObj.editdata();