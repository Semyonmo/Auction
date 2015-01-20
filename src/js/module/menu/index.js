module.exports = menuInit;


function menuInit() {
    var menu = $('.header__menu-list');
    var hoverMenu = $('.header__menu-hover');
    var menuItem = $('.header__menu-list-item');

    menu.hover(undefined, menuOnHoverOut);
    hoverMenu.hover(menuOnHover, menuOnHoverOut);

    menuItem.hover(function() {
        hoverMenu.addClass('active');

        if($(this).hasClass('disable')) {
            hoverMenu.removeClass('active');
        }
    });


    function menuOnHover() {
        hoverMenu.addClass('active');
    }

    function menuOnHoverOut() {
        hoverMenu.removeClass('active');
    }

    menuItem.hover(menuItemOnHover);

    function menuItemOnHover() {
        var index = $(this).index();
        menuItem.removeClass('active');

        $(this).addClass('active');

        $('.header__submenu-list',hoverMenu).hide();
        $('.header__submenu-list:eq('+index+')',hoverMenu).show();
    }
}

