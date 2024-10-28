function setName(name){
    this.name = name;
    console.log("function is being calling")
}

function printDetails(name,email,number){
    setName.call(this,name);

    this.email = email;
    this.number = number;
}

const user1 = new printDetails("shiwank","shiwankk@gmail.com","87546XXXXX")
console.log(user1);