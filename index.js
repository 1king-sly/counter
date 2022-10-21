const incr = document.getElementById("incr");
const decr= document.getElementById("decr");
const reset = document.getElementById("rst");

let num = 0;

decr.addEventListener("click",function(){
    num --;
    document.getElementById("num").innerHTML = num;
})
incr.addEventListener("click",function(){
    num ++;
    document.getElementById("num").innerHTML = num;
})
reset.addEventListener("click",function(){
    num = 0;
    document.getElementById("num").innerHTML = num;
})
