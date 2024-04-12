let valor=document.querySelector("#valor");
let dv=document.querySelector("#value" );

valor.oninput=()=>{
  let n=parseInt(valor.value) ;
  dv.innerHTML=valor.value;
  i.style.width=n+"px";
  i.style.height=n+"px";
}
