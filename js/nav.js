// variables
const menu  = document.querySelector('#menu');
const nav = document.querySelector('.navegacion')
const body = document.querySelector('body')
const servicios = document.querySelector('#servicios');
// const productos = document.querySelector('#productos');

const enlaces = {
    nosotros: 'Nosotros',
    servicios: 'Servicios',
    // productos: 'Productos',
    reservar: 'Reservar',
    home: 'Home',
}

// events
menu.addEventListener('click', mostrarMenu);
nav.addEventListener('click', ocultarMenu);

function mostrarMenu(e) {
  // e.preventDefault();
  scrollToTop();
  if (nav.classList.contains('navegacion--activo')) {
    nav.classList.remove('navegacion--activo');
    menu.classList.remove('is-active');
    body.style.overflowY = 'auto';
  } else{
    nav.classList.add('navegacion--activo');
    menu.classList.add('is-active');
    body.style.overflowY = 'hidden';
  }
}

function ocultarMenu(e) {
    // e.preventDefault();
    const enlace = e.target;
    if (enlace.classList.contains('navegacion__enlace')) {
        
        if (nav.classList.contains('navegacion--activo')) {
            nav.classList.remove('navegacion--activo');
            menu.classList.remove('is-active');
            body.style.overflowY = 'auto';
            
        } 
        // if(enlace.textContent.trim() === enlaces.home) {
        //   window.location.href = 'index.html';
        // }
        // if(enlace.textContent.trim() === enlaces.servicios) {
        //     if(window.location.pathname === '/index.html'){
        //       servicios.scrollIntoView({ behavior: 'smooth' });
        //     } else {

        //     }
        // }
        // if(enlace.textContent.trim() === enlaces.nosotros) {
        //     window.location.href = 'nosotros.html';
        // }
        // if(enlace.textContent.trim() === enlaces.productos) {
        //   if(window.location.pathname === '/index.html'){
        //     productos.scrollIntoView({ behavior: 'smooth' });
        //   }
        // }
    }
}


function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // para un scroll suave
  });
}
// funciones