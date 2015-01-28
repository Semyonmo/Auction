var menu = require('./module/menu');
var gallery = require('./module/gallery');
var slider = require('./module/slider');
var imagesLazyLoad = require('./module/images');


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
