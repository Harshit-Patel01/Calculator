let display = document.getElementById("Display");

function reset(){
    display.innerText = 0;
}
function func(num){
    if (display.innerText != 0 && display.innerText.length < 25){
            display.innerText += num;
    }else{
        display.innerText = num;
    }
}
function operation(oper){
    if (display.innerText != 0 && display.innerText.length < 25){
        if ("*/+-%".includes(display.innerText.slice(-1)) != true){
            display.innerText += oper;
        }
    }
}
function equalto(){
    display.innerText = eval(display.innerText);
}
function remove(){
    if (display.innerText.length > 1){
        display.innerText = display.innerText.slice(0,-1);
    }else{
        display.innerText = 0;
    }
}