/*

getter and setter in classes.

*/


class user{

    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    get name(){
        return `${this._name.toUpperCase()} is name`;
    }

    // set name(value){
    //     this.name = value.toUpperCase();
    // }
    //setter and constructor both are setting the value of the name,this may give stack over flow error. So,in place of it we use a different property in setter.

    set name(value){
        this._name = value;
    }

    get email(){
        return this.gmail.toUpperCase();
    }

    set email(value){
        this.gmail = value;
    }
}

const user1 = new user("Shiwank","shiw12@gmail.com");
console.log(user1.name);
console.log(user1.email);



// --------------------------===============================----------------------




/*

getter and setter in functions.

*/


function userDetail(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,"email",{
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })
}

const user2 = new userDetail("shiwa123@gmail.com","abc")
console.log(user2.email);




// --------------------=================================-----------------------




/*

getter and setter in objects.

*/


const userInfo = {
    _email : "shiw123@gmail.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const user3 = Object.create(userInfo);
console.log(user3.email);