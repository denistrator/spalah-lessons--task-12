$(document).ready(function() {
    var clients_carousel = new Swiper('.clients-carousel', {
        loop: true,
        prevButton: '.clients-carousel-button-prev',
        nextButton: '.clients-carousel-button-next',
        // Default parameters
         slidesPerView: 6,
         spaceBetween: 40,
         // Responsive breakpoints
         breakpoints: {
           // when window width is <= 320px
           320: {
             slidesPerView: 2,
             spaceBetween: 10
           },
           // when window width is <= 480px
           480: {
             slidesPerView: 2,
             spaceBetween: 15
           },
           // when window width is <= 640px
           640: {
             slidesPerView: 4,
             spaceBetween: 20
           },
           // when window width is <= 960px
           960: {
             slidesPerView: 6,
             spaceBetween: 30
           }
         }
    })
});
