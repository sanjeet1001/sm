var app = angular.module('app',[
    'ngRoute'
]).config(config);
function config($routeProvider,$locationProvider){
    $routeProvider
    .otherwise({redirectTo:'/home'})
    .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'aboutCtrl'
    })
    .when('/home',{
        templateUrl: 'views/home.html',
        controller:'homeCtrl'
    })
    .when('/contact',{
        templateUrl: 'views/contact.html',
        controller:'contactCtrl'
    })
    .when('/uploadpic',{
        templateUrl: 'views/upload.html',
        controller:'uploadCtrl'
    });
};