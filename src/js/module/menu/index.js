module.exports = menuInit;


function menuInit() {
    var menu = $('.header__menu-list');
    var hoverMenu = $('.header__menu-hover');

    menu.hover(menuOnHover, menuOnHoverOut);
    hoverMenu.hover(menuOnHover, menuOnHoverOut);

    function menuOnHover() {
        $('.header__menu-hover').addClass('active');
    }

    function menuOnHoverOut() {
        $('.header__menu-hover').removeClass('active');
    }

    $('.header__menu-list-item').hover(menuItemOnHover);

    function menuItemOnHover() {
        var index = $(this).index();
        $('.header__menu-list-item').removeClass('active');

        $(this).addClass('active');

        $('.header__submenu-list',hoverMenu).hide();
        $('.header__submenu-list:eq('+index+')',hoverMenu).show();
    }


}

