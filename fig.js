
let vancho=document.querySelector("#vancho");
let vanchob=document.querySelector("#vanchob");
let valto=document.querySelector("#valto");
let alto=document.querySelector("#alto");
let ancho=document.querySelector("#ancho");
let colorf=document.querySelector("#colorf");
let anchob=document.querySelector("#anchob");
let colorb=document.querySelector("#colorb");
let tipob=document.querySelector("#tipob");
let a=document.querySelector("#a");

ancho.oninput=()=>{ dibujar()}
alto.oninput=()=>{ dibujar()}
anchob.oninput=()=>{ dibujar()}
colorf.onchange=()=>{ dibujar()}
colorb.onchange=()=>{ dibujar()}
tipob.onchange=()=>{ dibujar()}


const dibujar=()=>{
  let an=parseInt(ancho.value);
  let al=parseInt(alto.value);
  let ab=parseInt(anchob.value);

  let c1=colorf.value;
  let c2=colorb.value;
  let tipo=tipob.value;

  console.log("Ancho: ", an);
  console.log("Alto: ", al);
  console.log("Ancho Borde: ", ab);


  vancho.innerHTML=an;
  valto.innerHTML=al;
  vanchob.innerHTML=ab;


  a.style.width=an+"px";
  a.style.height=al+"px";
  a.style.borderWidth=ab+"px";
  a.style.backgroundColor=c1;
  a.style.borderColor=c2;
  a.style.borderStyle=tipo;
}