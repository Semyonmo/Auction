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
        $("div.lazy, a.lazy, img.lazy").lazyload({
            effect: "fadeIn"
        });
    });

    $(function () {
        var options = {
            $AutoPlay: false,
            $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
            $UISearchMode: 0,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).

            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $ChanceToShow: 2,

                $loop: 2,
                $DisplayPieces: 5,
                $ParkingPosition: 210,
                $SpacingX: 2,
                $SpacingY: 2
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,

                $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 6                                       //[Optional] Steps to go for each navigation request, default value is 1
            }
        };

        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    });



});