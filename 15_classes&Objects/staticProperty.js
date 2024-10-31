class user{

    constructor(username,email){
        this.username = username;
        this.email = email;
    }
    
    logMe(){
        console.log(`${this.username} logged in`);
    }

    static createId(){
        return "345"
    }

}

class teacher extends user{

    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const hello = new teacher("Pratap","12@gmail.com")
hello.username;
hello.logMe();
// hello.createId();  gives error because createId is static method.


const Shiwank = new user("Shiwank","123@gmail.com")
// console.log(Shiwank.createId());  gives error because createId is static method.