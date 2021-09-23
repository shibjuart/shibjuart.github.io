$(document).ready(function() {

    "use strict";

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function toggleFullscreen(elem) {
        // if (elem.requestFullscreen) {
            elem.requestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //     elem.msRequestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //     elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //     elem.webkitRequestFullscreen();
        // }
        // if (!document.fullscreenElement && !document.mozFullScreenElement &&
        //     !document.webkitFullscreenElement && !document.msFullscreenElement) {
        //     if (elem.requestFullscreen) {
        //         elem.requestFullscreen();
        //     } else if (elem.msRequestFullscreen) {
        //         elem.msRequestFullscreen();
        //     } else if (elem.mozRequestFullScreen) {
        //         elem.mozRequestFullScreen();
        //     } else if (elem.webkitRequestFullscreen) {
        //         elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        //     }
        // } else {
        //     if (document.exitFullscreen) {
        //         document.exitFullscreen();
        //     } else if (document.msExitFullscreen) {
        //         document.msExitFullscreen();
        //     } else if (document.mozCancelFullScreen) {
        //         document.mozCancelFullScreen();
        //     } else if (document.webkitExitFullscreen) {
        //         document.webkitExitFullscreen();
        //     }
        // }
    }


    $('.swiper-container').on('click', function() {
        toggleFullscreen(this);
    });
});