// JS has a prototypical behaviour means (upr se upr lekr jati hai values ko jb tkk null na aa jaaye)

// function function bhi hai aur sbhi chize js mai ek object hai to ye ek object bhi hai.

function multiplication(num){
    return num*10;
}

multiplication.power = 2

console.log(multiplication(5));
console.log(multiplication.power);
console.log(multiplication.prototype);   //jase hum arrays ke andrr .length, .prototype use krte hai kyuki woh ek object hai usse tarah hum function ka reference ke saath bhi kr skta hai . laga krr kisse bhi chiz ko access.




// creating our own prototypes and knowning about new keyword that helps in creating new objects. 
function userName(name, price){
    this.name = name;
    this.price = price;
}

userName.prototype.incPrice = function(){
    this.price++
}

userName.prototype.printMe = function(){
    console.log(this.price);
}

const coffee = new userName("coffee", 40);
const tea = new userName("tea", 20);

coffee.incPrice();
coffee.printMe();