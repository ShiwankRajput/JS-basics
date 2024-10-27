/*

Fetch API  --->

1) The fetch API provides an interface for fetching (sending/recieving) resources.
2) It uses request and response objects.
3) the fetch() method is used to fetch a resource(data).

syntax : let promise = fetch(URL, [options])

*/


/*

json() method ----> returns a second promise that resolves with the result of parsing the response body text as JSON.(Input is JSON,output is JS object). It is a asynchronous method.

*/


const factData = document.querySelector('#fact')
const button = document.querySelector('#btn');

//fetch returns a promise
let promise = fetch('https://catfact.ninja/fact')
console.log(promise);


async function name(){
    console.log("getting data.....");
    let response = await fetch('https://cat-fact.herokuapp.com/facts');
    console.log(response);  //JSON format
    let data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].text);
    factData.innerHTML = data[0].text;
}

button.addEventListener('click',name);