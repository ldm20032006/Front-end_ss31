console.log(document);
document.getElementById("demo-id");   //h1
//console.getElementByClassName()
let htmlList =document.getElementsByClassName("demo-class");
console.log(htmlList);
console.log(htmlList[0]);
console.log(htmlList[2]);

for(let i = 0; i < htmlList.length; i++){
    console.log(htmlList[i]);
}