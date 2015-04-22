var menu = require('./module/menu');
var gallery = require('./module/gallery');
var slider = require('./module/slider');
var imagesLazyLoad = require('./module/images');

require('swiper');


/**
 * Load menu
 */
menu();

/**
 * Init library for lazy load images on suite
 */
imagesLazyLoad();

/**
 * Load slider on index page
 */
slider();

/**
 * Load gallery on lot page
 */
gallery();


$('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});
