/**
 * Created by Innokentii on 08.10.2016.
 */
var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider
        .when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        })
        .when('/sign', {
            title: 'Sign Up',
            templateUrl: 'partials/sign.html',
            controller: 'signCtrl'
        })
        .when('/', {
            title: 'Dashboard',
            templateUrl: 'partials/dashboard.html',
            controller: 'dashCtrl'
        })
        .otherwise({
            title: '404',
            templateUrl: 'partials/404.html',
            controller: 'notfCtrl'
        });
}])
    .run(function($rootScope,$location){
        var guest = ['/login','/sign'];//pages for not logged users
        $rootScope.signed = sessionStorage.getItem('token') || localStorage.getItem('token') || false;
        $rootScope.user_id = sessionStorage.getItem('user_id') || localStorage.getItem('user_id') || null;
        $rootScope.token = sessionStorage.getItem('token') || localStorage.getItem('token') || null;;
        console.log(sessionStorage.getItem('user_id'),localStorage.getItem('user_id'),sessionStorage.getItem('user_id') || localStorage.getItem('user_id') );
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.signed &&(guest.indexOf(next.$$route.originalPath) != -1)){
                $location.path("/");
            } else if (!$rootScope.signed &&(guest.indexOf(next.$$route.originalPath) == -1)){
                $location.path("/login");
            }
        });
    });

    app.controller('main', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }])
    .controller('notfCtrl', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
     
    }]);
  