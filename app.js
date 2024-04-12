/*
console.log("Jack Ross ♥");
document.write("<h1>Jack Ross ♥ </h1>");
alert("Jack Ross ♥");
*/

const suma=()=>{

        let n1=parseInt(document.querySelector("#num1").value);
        let n2=parseInt(document.querySelector("#num2").value);
        let sum=n1+n2;
        let res=document.querySelector("#res");
if(isNaN(sum)){
res.innerHTML="<h1>0</h1>";
}
else{
    res.innerHTML="<h1>"+sum+"<h1>"
}
}
const resta=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let rest=n1-n2;
    let res=document.querySelector("#res");
    if(isNaN(rest)){
    res.innerHTML="<h1>0</h1>";
    }
    else{
        res.innerHTML="<h1>"+rest+"<h1>"
    }
}

const mult=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let mul=n1*n2;
    let res=document.querySelector("#res");
    if(isNaN(mul)){
    res.innerHTML="<h1>0</h1>";
    }
    else{
        res.innerHTML="<h1>"+mul+"<h1>"
    }}

const divi=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let divic=n1/n2;
    let res=document.querySelector("#res");
    if(isNaN(divic)){
    res.innerHTML="<h1>0</h1>";
    }
    else{
        res.innerHTML="<h1>"+divic+"<h1>"
    }}

const porc=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let porce=n1%n2;
    let res=document.querySelector("#res");
    if(isNaN(porce)){
    res.innerHTML="<h1>0</h1>";
    }
    else{
        res.innerHTML="<h1>"+porce+"<h1>"
    }}

const pote=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let pot=n1**n2;
    let res=document.querySelector("#res");
    if(isNaN(pot)){
    res.innerHTML="<h1>0</h1>";
    }
    else{
        res.innerHTML="<h1>"+pot+"<h1>"
    }}

const del=()=>{
document.querySelector("#num1").value="";
document.querySelector("#num2").value="";
    document.querySelector("#res").innerHTML="";
}
