var spinner=document.querySelector("#spinner");
document.querySelector("#btnVer").onclick=()=>{
    spinner.innerHTML="<video src='spinner.mp4'>";
    setTimeout(()=>{
        spinner.innerHTML="<h1>HOLA!!!!</h1>";
    },2000)
}