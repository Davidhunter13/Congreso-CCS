// Obtener el elemento de la barra de navegación
var navBar = document.getElementById('miNavBar');

// Función para cambiar el color de la barra de navegación
function cambiarColorNavBar() {
  if (window.scrollY > 0) {
    // Cambiar el color de fondo de la barra de navegación cuando se hace scroll
    navBar.style.backgroundColor = '#001045a4'; // Reemplaza 'blue' por el color deseado}
    navBar.style.boxShadow = "5px 5px 5px 0px #0000007a"
    navBar.style.backdropFilter= "blur(3px)"
  } else {
    // Restaurar el color de fondo original de la barra de navegación
    navBar.style.backgroundColor = 'transparent'; // Reemplaza por el color original de tu barra de navegación
    navBar.style.boxShadow = "none"
  }
}

// Asignar el evento de scroll a la función para cambiar el color
window.addEventListener('scroll', cambiarColorNavBar);


// // VIDEO 
// var video = document.getElementById("miVideo");
// video.addEventListener("canplaythrough", function() {
//   video.muted = false;
// });

function boton() {
  var navbarButton = document.getElementById("navbarButton");
  var navbarNav = document.getElementById("miNavBar");

  navbarNav.classList.toggle("active");
}

