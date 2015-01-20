module.exports = imagesInit;

function imagesInit() {
    $("div.lazy, a.lazy, img.lazy").lazyload({
        effect: "fadeIn"
    });
}