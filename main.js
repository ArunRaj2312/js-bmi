let button=document.getElementById("btn");
button.addEventListener("click",myFunc);
function myFunc(){
let hei=parseInt(document.getElementById("height").value);
let wei=parseInt(document.getElementById("weight").value);
let bmi=Math.floor((wei/hei/hei)*10000);
if(bmi<18){
    document.getElementById("demo").innerText="Normal";
    document.getElementById("demo").style.color="yellow";
}
else if(bmi>=18 && bmi<25){
    document.getElementById("demo").innerText="Good";
    document.getElementById("demo").style.color="green";   
}
else{
    document.getElementById("demo").innerText="Over Weight";
    document.getElementById("demo").style.color="red";
}
}

