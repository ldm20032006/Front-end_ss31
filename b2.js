let div = document.getElementById("body");
let bn = document.getElementById("bnt");
bn.onclick=function(){
    if(div.style.backgroundColor=="white"){
        div.style.backgroundColor="black";
        div.style.color="white"
    } else{
        div.style.backgroundColor="white";
        div.style.color="black";
    }
}