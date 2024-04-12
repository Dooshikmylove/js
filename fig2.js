
let vancho=document.querySelector("#vancho");
let vanchob=document.querySelector("#vanchob");
let valto=document.querySelector("#valto");
let vradio=document.querySelector("#vradio");
let vrotate=document.querySelector("#vrotate");
let vtraslate=document.querySelector("#vtraslate");
let vtraslatey=document.querySelector("#vtraslatey");
let vscale=document.querySelector("#vscale");
let vsx=document.querySelector("#vsx");
let vsy=document.querySelector("#vsy");
let vtamaño=document.querySelector("#vtamaño");
let alto=document.querySelector("#alto");
let ancho=document.querySelector("#ancho");
let colorf=document.querySelector("#colorf");
let anchob=document.querySelector("#anchob");
let colorb=document.querySelector("#colorb");
let tipob=document.querySelector("#tipob");
let radio=document.querySelector("#radio")
let rotate=document.querySelector("#rotate");
let traslate=document.querySelector("#traslate");
let traslatey=document.querySelector("#traslatey");
let scale=document.querySelector("#scale");
let sombrax=document.querySelector("#sombrax");
let sombray=document.querySelector("#sombray");
let tamaño=document.querySelector("#tamaño");
let cs=document.querySelector("#cs");
let a=document.querySelector("#a");


ancho.oninput=()=>{ dibujar()}
alto.oninput=()=>{ dibujar()}
anchob.oninput=()=>{ dibujar()}
colorf.onchange=()=>{ dibujar()}
colorb.onchange=()=>{ dibujar()}
tipob.onchange=()=>{ dibujar()}
radio.oninput=()=>{ dibujar()}
rotate.oninput=()=>{ dibujar()}
traslate.oninput=()=>{ dibujar()}
traslatey.oninput=()=>{ dibujar()}
scale.oninput=()=>{ dibujar()}
sombrax.oninput=()=>{ dibujar()}
sombray.oninput=()=>{ dibujar()}
tamaño.oninput=()=>{ dibujar()}
cs.onchange=()=>{ dibujar()}


const dibujar=()=>{
  let an=parseInt(ancho.value);
  let al=parseInt(alto.value);
  let ab=parseInt(anchob.value);
  let ra=parseInt(radio.value);
  let ro=parseInt(rotate.value);
  let tra=parseInt(traslate.value);
  let tray=parseInt(traslatey.value);
  let sc=parseInt(scale.value);
  let sx=parseInt(sombrax.value);
  let sy=parseInt(sombray.value);
  let tam=parseInt(tamaño.value);


  let c1=colorf.value;
  let c2=colorb.value;
  let tipo=tipob.value;
  let colors=cs.value;


  console.log("Ancho: ", an);
  console.log("Alto: ", al);
  console.log("Ancho Borde: ", ab);


  vancho.innerHTML=an;
  valto.innerHTML=al;
  vanchob.innerHTML=ab;
  vradio.innerHTML=ra;
vrotate.innerHTML=ro;
vtraslate.innerHTML=tra;
vtraslatey.innerHTML=tray;
vscale.innerHTML=sc;
vsx.innerHTML=sx;
vsy.innerHTML=sy;


  a.style.width=an+"px";
  a.style.height=al+"px";
  a.style.borderWidth=ab+"px";
  a.style.borderRadius=ra+"px";
  a.style.rotate=ro+"deg";
  a.style.translate=tra+"px";
  a.style.transform="translateY"+tray+"px";
  a.style.scale=sc+"%";
  a.style.boxShadowX=sx+"px";
  a.style.boxShadowY=sy+"px";
  a.style.boxShadow=tam+"px";
  a.style.backgroundColor=c1;
  a.style.borderColor=c2;
  a.style.borderStyle=tipo;
}
