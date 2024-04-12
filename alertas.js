document.querySelector("#ej1").onclick =()=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Algo salió mal!",
        footer: '<a href="#">¿Por qué tengo este problema?</a>'
      });
}


document.querySelector("#ej2").onclick =()=>{
Swal.fire({
    title: "¿Quieres guardar los cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `NO Guardar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Guardado!", "", "exitosamente");
    } else if (result.isDenied) {
      Swal.fire("Los cambios no se guardan", "", "info");
    }
  });
}


document.querySelector("#ej3").onclick =()=>{
    let timerInterval;
    Swal.fire({
      title: "se cerrara automaticmente",
      html: "se cerrara en  <b></b> milisegundos.",
      timer: 6000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("se cerrara por el temporizador");
      }
    });

}


document.querySelector("#ej4").onclick =()=>{
    Swal.fire({
        title: "porque los hombres literarios son perfectos?",
        text: "porque no existen????",
        icon: "question"
      });
    }

    document.querySelector("#ej5").onclick =()=>{
        Swal.fire({
            title: "Jack's version ♥ ♥ ♥ ♥ ♥ ",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }

    document.querySelector("#ej6").onclick =()=>{
        Swal.fire({
            title: "Te gusta Rigel Wilde?",
            text: "En serio?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Siii"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Atras gata rompehogares",
                text: "El es mio!!!!",
                icon: "success"
              });
            }
          });

    }

    document.querySelector("#ej7").onclick =()=>{
        Swal.fire({
            title: "Jack's version",
            text: "♥ ♥ ♥",
            imageUrl: "J.jpeg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }