// variables
const menu  = document.querySelector('#menu');
const nav = document.querySelector('.navegacion')
const body = document.querySelector('body')
const servicios = document.querySelector('#servicios');
const productos = document.querySelector('#productos');

const enlaces = {
    nosotros: 'Nosotros',
    servicios: 'Servicios',
    productos: 'Productos',
    reservar: 'Reservar',
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
    e.preventDefault();
    const enlace = e.target;
    if (enlace.classList.contains('navegacion__enlace')) {
        
        if (nav.classList.contains('navegacion--activo')) {
            nav.classList.remove('navegacion--activo');
            menu.classList.remove('is-active');
            body.style.overflowY = 'auto';
            
        } 
        if(enlace.textContent.trim() === enlaces.servicios) {
            servicios.scrollIntoView({ behavior: 'smooth' });
        }
        if(enlace.textContent.trim() === enlaces.nosotros) {
            window.location.href = 'https://www.youtube.com/';
        }
        if(enlace.textContent.trim() === enlaces.productos) {
            productos.scrollIntoView({ behavior: 'smooth' });
        }
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