var menu = require('./module/menu');

$(document).ready(function () {

    /**
     * Init menu
     */
    menu();

    /**
     * Init library for lazy load images on suite
     */
    $(function () {
        $("div.lazy, a.lazy").lazyload({
            effect: "fadeIn"
        });
    });
});