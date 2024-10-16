// `` (backtiks) => yaha pr ata hai string interpolation means replacing placeholders with their corresponding values.

const name = "shiwank"
const age = 20
console.log(name + age);
console.log(name[0]);
console.log(`${name} ${age}`);

const gameName = new String("Rajput");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); //6
console.log(gameName.charAt(2)); //j
console.log(gameName.indexOf('a')); //1
console.log(gameName.toUpperCase());



//substring method.....
//here in substring function we cannot give negative number, if given then it concludes it as 0.
const newString = gameName.substring(0,4)
console.log(newString);



//slice method.....
//here we can use negative indexing as well.
const anotherstring = gameName.slice(0,4)
console.log(anotherstring);

const thirdstring = gameName.slice(-5,-2)
console.log(thirdstring);


//trim method....
//trim basically removes whitespaces from left and right of value stored in profileName.
const profileName = "    Abhi jeet   "
console.log(profileName);
console.log(profileName.trim());


//replace and includes method..
const url = "https://shiwank.com/shiwank%20Rajput"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes("shiwank"));
console.log(url); //but we cannot see change in the original string afterwards..so this is special.


//spit method...
const text = "hello-everyone-how-are-you"
console.log(text.split("-")); //here plit removes - and converts this text elements into array.
const Name = "shiwank"
console.log(Name.split(''));