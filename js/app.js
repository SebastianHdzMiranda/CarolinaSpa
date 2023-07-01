// Swiper BASES

// window.swiper = new Swiper({
//     el: '.slider__list', //contenedor del slider
//     slideClass: 'slider__item', //elemento de cada slide sin '.'
//     createElements: true, //nos crea el resto del HTML
//     // autoplay: { //cambio automatico
//     //     delay: 2000,

//     // },
//     loop: true, // ciclo infito, vuelve al slider inicial
//     // spaceBetween: 20, //espacio entre cada slide
//     pagination: true, //indica en que slide esta con circulos en la parte inferior del contenedor
//     navigation: true, //flechas a los costados para cambiar de img
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    // autoplay:{
    //     delay: 3000,
    // },
});