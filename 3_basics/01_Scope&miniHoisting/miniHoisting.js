one(5)
function one(num){
    return num+1
}


two(5)   //error, iss tarah se expression ke through agr function declare krta hai toh uske naam ko phle access nhi kr skta hai javascript mai.
const two = function (num){
    return num+2
}
