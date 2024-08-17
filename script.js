$(document).ready(function () {
    // Añade un evento de clic a todos los enlaces del nav
    $('nav a').on('click', function (event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene el atributo href del enlace
      var target = $(this).attr('href');

      // Obtiene la posición del elemento de destino
      var targetPosition = $(target).offset().top;

      // Realiza un desplazamiento suave a la posición del elemento de destino
      $('html, body').animate({
        scrollTop: targetPosition
      }, 50);
    });
  });

  const desplegarMenu = ()=>{
    let menu = document.querySelector(".container-section")
    let menu2 = document.querySelector("#menu2")
    let menu3 = document.querySelector("#menu3")
    let lis = document.querySelector(".container-section li")
    if(menu.style.width !== "0px"){
      menu.style.width = "0px"
      menu.style.height = "0px"
      menu2.style.width = "25px"
      menu3.style.width = "25px"
    }
    else{
      lis.style.opacity = "1"
      menu.style.backgroundColor = "black"
      menu.style.width = "360px"
      menu.style.height = "300px"
      menu2.style.width = "20px"
      menu3.style.width = "10px"
    }
  }