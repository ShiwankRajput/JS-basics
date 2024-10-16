const map = new Map()
map.set("1","Shiwank")
map.set("2","Dev")
map.set("3","Tarang")
map.set("4","Ashmit")
// console.log(map);

//iterating map =>
for (const i of map) {
    console.log(i);
}

for (const [Key,value] of map) {
    console.log(Key,"->",value);
}

for (const i in map) {    //for-in loop is not iterable on maps.
    console.log(map[i]);
}



//another example....
console.log("<----- another axample ---->");
const map1 = new Map()
map1.set("name","shiwank")
map1.set("age",21)
map1.set("isLogged","yes")
map1.set("email","shiwank@gmail.com")

//iterating elements of map
for (const i in map1){
    console.log(i);  //for in is not iterable on maps.
}

for (const i of map1){
    console.log(i);
}

for (const [key,value] of map1){
    console.log(`keys: ${key} and values: ${value}`);
}

for (const i in map1){
    console.log(map1[i]);
}