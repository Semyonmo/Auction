module.exports = sliderInit;

function sliderInit() {
    angular
        .module('app', [])
        .controller('GalleryCtrl', function ($scope, $timeout) {
            var timeout = {};
            $scope.slide = {};
            $scope.slideIndex = 0;
            $scope.prev = '';
            $scope.next = '';

            $scope.nextSlide = function () {
                if ($scope.slideIndex > $scope.slides.length - 2) {
                    $scope.slideIndex = 0;
                } else {
                    $scope.slideIndex++;
                }
            };

            $scope.prevSlide = function () {
                if ($scope.slideIndex == 0) {
                    $scope.slideIndex = $scope.slides.length - 1;
                } else {
                    $scope.slideIndex--;
                }
            };

            $scope.showSlide = function (index) {
                $scope.slideIndex = index;
            };

            $scope.slides = [
                {
                    title: 'Сдаем отчетность 1!',
                    text: 'Сезон летних отпусков в разгаре. А между тем самое время готовиться к сдаче отчетности за 1-е полугодие! Уйти в отпуск налегке и сдать отчетность без ошибок Вам помогут вее время готовиться к сдаче отчетности за 1-е полугодие! Уйти в отпуск налегке и сдать отчетность без ошибок Вам помогут вебинары:',
                    btn: 'Присоеденится',
                    img: '/img/gallery/image-1.png',
                    color: {'background-color': '#12c599'},
                    imgBanner: {
                        'background': 'url(http://ic-iskra.ru/uploads/banner/img/6e7cd2dd73722d788a000000/%D0%9C%D0%A4%D0%A1%D0%9E-44.jpg) no-repeat',
                        'background-size': 'cover'
                    },
                    prev: 'Мастер-класс "Актуальные вопросы оплаты труда 2014 года. Изменения в законодательстве 1'
                },
                {
                    title: 'Сдаем отчетность 2!',
                    text: 'Сезон летних не отпусков в разгаре. А между тем самое время готовиться к сдаче отчетности за 1-е полугодие! Уйтовиться к сдаче отчетности за 1-е полугодие! Уйти в отпуск налегке и сдать отчетность без ошибок Вам помогут вебинары:',
                    btn: 'Не присоеденится',
                    //этот адресс нужен для того чтобы картинка была пустой
                    img: '/img/gallery/handtinytrans.gif',
                    color: {'background-color': '#FFA86C'},
                    imgBanner: {
                        'background': 'url(http://ic-iskra.ru/uploads/banner/img/6e7cd2dd73722d788a000000/%D0%9C%D0%A4%D0%A1%D0%9E-44.jpg) no-repeat',
                        'background-size': 'cover'
                    },
                    prev: 'Мастер-класс "Актуальные вопросы оплаты труда 2015 года. Изменения в законодательстве 2'
                },
                {
                    title: 'Сдаем отчетность 3!',
                    text: 'Сезон летних не отпусков в разгаре. А между тем самое время г в отпуск налегке и сдать отчетность без ошибок Вам помогут вебинары:',
                    btn: 'Не присоеденится',
                    img: '/img/gallery/image-1.png',
                    color: {'background-color': '#12c599'},
                    imgBanner: '',
                    prev: 'Мастер-класс "Актуальные вопросы оплаты труда 2015 года. Изменения в законодательстве 3'
                },
                {
                    title: 'Сдаем отчетность 4!',
                    text: 'Сезон летних не отпусков в разгаре. А между тем самое время готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полуя готовиться к сдаче отчетности за 1-е полугодие! Уйти в отпуск налегке и сдать отчетность без ошибок Вам помогут вебинары:',
                    btn: 'Не присоеденится',
                    color: {'background-color': '#3F96FF'},
                    img: '/img/gallery/image-1.png',
                    imgBanner: '',
                    prev: 'Мастер-класс "Актуальные вопросы оплаты труда 2015 года. Изменения в законодательстве 4'
                }
            ];

            $scope.slide = $scope.slides[$scope.slideIndex];

            $scope.$watch('slideIndex', function (value) {
                $timeout.cancel(timeout);
                $('.gallery-slide .row').animate({opacity: 0}, 300);
                timeout = $timeout(function () {
                    $('.gallery-slide .row').animate({opacity: 1}, 100);
                    $scope.slide = $scope.slides[value];
                    setPrev(value);
                    slide();
                }, 300);

                $('.gallery-navbar-circle-list-circle-item').removeClass('active');
                $($('.gallery-navbar-circle-list-circle-item').get($scope.slideIndex)).addClass('active');
            });

            function setPrev(value) {
                if ($scope.slides[value - 1] === undefined) {
                    $scope.prev = $scope.slides[$scope.slides.length - 1].prev;
                    $scope.next = $scope.slides[value + 1].prev;
                    return true;
                }
                if ($scope.slides[value + 1] === undefined) {
                    $scope.next = $scope.slides[0].prev;
                    $scope.prev = $scope.slides[value - 1].prev;
                    return true;
                } else {
                    $scope.prev = $scope.slides[value - 1].prev;
                    $scope.next = $scope.slides[value + 1].prev;
                }
            }

            function slide() {
                timeout = $timeout(function () {
                    if ($scope.slideIndex === $scope.slides.length - 1) {
                        $scope.slideIndex = 0;
                    } else {
                        $scope.slideIndex++;
                    }

                    slide();
                }, 10000);
            }

            slide();

            $(document).ready(function () {
                $('.gallery-navbar-circle-list-circle-item:first').addClass('active');
            });
        });
}