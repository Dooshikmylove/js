let valor=document.querySelector("#valor");
let dv=document.querySelector("#value" );

valor.oninput=()=>{
  let n=parseInt(valor.value) ;
  dv.innerHTML=valor.value;
  if(n<=25 ) {
  dv.style.color="purple";
  } 
  else if(n>26 && n<=
 50 ){
    dv.style.color="pink";
  }
  else if(n>51 &&n<=75 ){
    dv.style.color="blue";
  }
  else if(n>76 &&n<=100 ){
    dv.style.color="coral";
  }
}
