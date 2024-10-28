/*

Defining or creating prototypes of objects ---->

*/



const name1 = "shiwank"
const name2 = "Rajput     "

String.prototype.trueLength = function(){
    console.log(this.trim().length);
}

console.log(name1.length);  //7
console.log(name2.length);  //not giving true length which is 6
name2.trueLength();  //6




//  ------------------------================================-----------------------


let heroPower = {
    Thor : "hammer",
    Spiderman : "sling",

    getThorPower : function(){
        console.log(`Thor power is -> ${this.Thor}`)
    }
}


Object.prototype.getPower = function(){     //sbhi array,string,function objects se pass hote hai toh ye method sbbke andr milega.
    console.log("getting power for all");
}

Array.prototype.heyShiwank = function(){
    console.log("hello Shiwank");
}

heroPower.getThorPower();
heroPower.getPower();


let myHeroes = ["Thor","SpiderMan"]
console.log(myHeroes.length);
myHeroes.getPower();
myHeroes.heyShiwank();


// -----------------------======================================---------------------------


/* 
    inheritance without classes 
   
*/

const teacher = {
    isOnline : true
}

const teachingSupport = {
    gettingSupport : "yes"
}

//old syntax of inheriting the value
teachingSupport.__proto__ = teacher;
console.log(teachingSupport.isOnline);

//modern syntax of inheriting the values
Object.setPrototypeOf(teachingSupport,teacher);
console.log(teachingSupport.isOnline);