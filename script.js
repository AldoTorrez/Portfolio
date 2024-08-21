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
    if(menu.style.display === "flex"){
      menu.style.display = "none"
    }
    else{
      menu.style.display = "flex"
    }
  }
  const clickInicio = ()=>{
    desplegarMenu()
  }

  const clickTech = ()=>{
    desplegarMenu()
  }

  const clickProject = ()=>{
    desplegarMenu()
  }
  const clickContact = ()=>{
    desplegarMenu()
  }