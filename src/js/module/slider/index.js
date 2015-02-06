module.exports = sliderInit;

function sliderInit() {
    angular
        .module('app', [])
        .controller('GalleryCtrl', function ($scope, $timeout, $http) {
            var timeout = {};
            $scope.slide = {};
            $scope.slideIndex = 0;
            $scope.prev = '';
            $scope.next = '';

            (function dataLoad() {
                //$http.get('https://api.myjson.com/bins/1jpp3').success(function(data) {
                $http.get('/main/sliderdata').success(function(data) {
                    $scope.slides = data;
                    $scope.slide = $scope.slides[$scope.slideIndex];


                    $scope.$watch('slideIndex', function (value) {
                        $timeout.cancel(timeout);
                        //$('.gallery-slide .row').animate({opacity: 0.5}, 300);
                        timeout = $timeout(function () {
                            //$('.gallery-slide .row').animate({opacity: 1}, 100);
                            $scope.slide = $scope.slides[value];
                            setPrev(value);
                            slide();
                        }, 0);

                        $('.gallery-navbar-circle-list-circle-item').removeClass('active');
                        $($('.gallery-navbar-circle-list-circle-item').get($scope.slideIndex)).addClass('active');
                    });
                }).error(function(data) {
                    console.log(data);
                });
            })();


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