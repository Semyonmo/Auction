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


    $(function(){

        var options = {
                firstImageIndex: 5,
                borderWeight: 4
            },

            params = {
                sources: [
                    {
                        thumbnail: '../img/thumbnails/1.jpg',
                        preview: '../img/previews/1.jpg',
                        original: '../img/originals/1.jpg',
                        title: 'Woods troll'
                    }, {
                        thumbnail: '../img/thumbnails/2.jpg',
                        preview: '../img/previews/2.jpg',
                        original: '../img/originals/2.jpg',
                        title: 'A frosty tree New Zealand'
                    }, {
                        thumbnail: '../img/thumbnails/3.jpg',
                        preview: '../img/previews/3.jpg',
                        original: '../img/originals/3.jpg',
                        title: 'Bloody fog'
                    }, {
                        thumbnail: '../img/thumbnails/4.jpg',
                        preview: '../img/previews/4.jpg',
                        original: '../img/originals/4.jpg',
                        title: 'Blue dock'
                    }, {
                        thumbnail: '../img/thumbnails/5.jpg',
                        preview: '../img/previews/5.jpg',
                        original: '../img/originals/5.jpg',
                        title: 'Daisy wallpaper'
                    }, {
                        thumbnail: '../img/thumbnails/6.jpg',
                        preview: '../img/previews/6.jpg',
                        original: '../img/originals/6.jpg',
                        title: 'Flower'
                    }, {
                        thumbnail: '../img/thumbnails/7.jpg',
                        preview: '../img/previews/7.jpg',
                        original: '../img/originals/7.jpg',
                        title: 'Waterdrops on the glass'
                    }, {
                        thumbnail: '../img/thumbnails/8.jpg',
                        preview: '../img/previews/8.jpg',
                        original: '../img/originals/8.jpg',
                        title: 'I\'ll follow you'
                    }, {
                        thumbnail: '../img/thumbnails/9.jpg',
                        preview: '../img/previews/9.jpg',
                        original: '../img/originals/9.jpg',
                        title: 'Fresh green trees'
                    }
                ]
            };

        $( '.photocradle' ).photocradle( params, options );

    });


});