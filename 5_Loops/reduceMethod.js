/* 
    reduce method -> (basically ye array ko reduce krke as a sum return krta hai)
*/


//using simple function....
const arr = [1,2,3]

const value = arr.reduce(function (acc,curval){
    console.log(`accumulator : ${acc} and currentValue : ${curval}`);
    return acc+curval
},0)

console.log(value);


//using arrow function.....
const value1 = arr.reduce( (acc,curval) => acc+curval,0)
console.log(value1);


//developing shopping cart....
console.log("<----- AMAZON SHOPPING CART ----->");
const amazon_shoppingCart = [
    {
        itemName : "book",
        price : 257
    },
    {
        itemName : "laptop",
        price  : 53600
    },
    {
        itemName : "Shirt",
        price : 659,
    },
    {
        itemName : "Jeans",
        price : 899
    }
]

const total_price = amazon_shoppingCart.reduce( (acc, item) => {
    return acc+item.price
}, 0)

console.log(`Total amount to be paid is -> ${total_price}`);



//developing my shop apyment system...
console.log("<----- MY NEEDS STORE ----->");
const myShop = [
    {
        item : "earphone",
        price : 250
    },
    {
        itme : "Redmi note 9 pro max",
        price : 18000
    },
    {
        item : "toastre machine",
        price : 750
    }
]

const totalAmount = myShop.reduce( function (acc,item) {
    return acc+item.price;
},0)
console.log(`The amount to be paid is > ${totalAmount}`);