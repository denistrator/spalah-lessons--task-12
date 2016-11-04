$(document).ready(function() {
    var m_gallery = new Swiper('.m-gallery', {
        loop: true,
        effect: 'flip'
    })
    $(".m-gallery-close").on('click', function() {
        $(".m-gallery").removeClass("show");
        $(".m-gallery").addClass("hide");
        // maybe use toggle class or something
    })

    $('.m-gallery-thumb').on('click', function() {
        $(".m-gallery").removeClass("hide");
        $(".m-gallery").addClass("show");
        // maybe use toggle class or something
    })
    // Todo: remade using data atribures
    $('.m-gallery-thumb-1').on('click', function() {
        m_gallery.slideTo(1);
    })
    $('.m-gallery-thumb-2').on('click', function() {
        m_gallery.slideTo(2);
    })
    $('.m-gallery-thumb-3').on('click', function() {
        m_gallery.slideTo(3);
    })
    $('.m-gallery-thumb-4').on('click', function() {
        m_gallery.slideTo(4);
    })
    $('.m-gallery-thumb-5').on('click', function() {
        m_gallery.slideTo(5);
    })
    $('.m-gallery-thumb-6').on('click', function() {
        m_gallery.slideTo(6);
    })
    $('.m-gallery-thumb-7').on('click', function() {
        m_gallery.slideTo(7);
    })
    $('.m-gallery-thumb-8').on('click', function() {
        m_gallery.slideTo(8);
    })
    $('.m-gallery-thumb-9').on('click', function() {
        m_gallery.slideTo(9);
    })
    $('.m-gallery-thumb-10').on('click', function() {
        m_gallery.slideTo(10);
    })
    $('.m-gallery-thumb-11').on('click', function() {
        m_gallery.slideTo(11);
    })
    $('.m-gallery-thumb-12').on('click', function() {
        m_gallery.slideTo(12);
    })
});