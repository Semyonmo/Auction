var menu = require('./module/menu');
var gallery = require('./module/gallery');
var slider = require('./module/slider');
var imagesLazyLoad = require('./module/images');

$(document).ready(function () {
    /**
     * Load menu
     */
    menu();

    /**
     * Init library for lazy load images on suite
     */
    imagesLazyLoad();

    /**
     * Load gallery on lot page
     */
    gallery();

    /**
     * Load slider on index page
     */
    slider();
});