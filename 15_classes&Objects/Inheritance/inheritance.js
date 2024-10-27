/*

INHERITANCE ----->

inheritance is passing down properties & methods from parent class to child class.

class Parent {

}

class Child extends Parent {

}

note: If Child & Parent have same method, child’s
method will be used. [Method Overriding]

*/


class person{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
    work(){
        console.log("DO nothing");
    }
}

class Engineer extends person{
    work(){
        console.log("Engineer builds new technologies")
    }
}

class Doctor extends person{
    work(){
        super.eat();  //invokes to the eat method of parent class.
        console.log("Doctor treats patient");
    }
}

let ShiwankEngineer = new Engineer();
ShiwankEngineer.work();
ShiwankEngineer.eat();

let ShiwankDoctor = new Doctor();
ShiwankDoctor.work();
ShiwankDoctor.sleep();