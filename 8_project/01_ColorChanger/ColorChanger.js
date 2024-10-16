const button = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

button.forEach(function(b){
    console.log(b);
    b.addEventListener('click', function(e){  //e ek object hai kyunki hrr ek event ek object carry krta hai.
        console.log(e);
        console.log(e.target);  //kaha se woh event aya hai or kis target se woh event aya hai jase ki div se woh event aya hai.

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        } 
        else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        } 
        else if(e.target.id === 'skyblue'){
            body.style.backgroundColor = e.target.id;
        }
    
    });

});