let randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}


let bndd;

const changeColor = function(){

    if(bndd == null){
        bndd = setInterval(colorIt,1000);
    }
    
    function colorIt(){
        document.body.style.backgroundColor = randomColor();
    }
}

const deleteColor = function(){

    clearInterval(bndd);
    bndd = null;
}

document.querySelector('#start').addEventListener('click',changeColor)

document.querySelector('#stop').addEventListener('click',deleteColor)