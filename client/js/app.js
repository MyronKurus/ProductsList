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
  
/**
 * Created by Innokentii on 12.10.2016.
 */
app.directive('productList', function(){
    return {
        restrict: 'EA',
        scope: {products:'='},
        templateUrl:"partials/prodlist.html"
    }
});
/**
 * Created by Innokentii on 12.10.2016.
 */
app.service('user',function ($http,$window,$rootScope,$httpParamSerializerJQLike) {
    this.get = function(id){
        return $http({
            method: 'GET',
            url: '/api/private/user/' + id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': $rootScope.token
            }
        })
    }
    this.logout = function(){
        localStorage.clear();
        sessionStorage.clear();
        $window.location.href = '/login';//here must be used location path method. but something went wrong
    }
    this.update = function(id,data){
        return $http({
            method: 'POST',
            url: '/api/private/user/' + id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': $rootScope.token
            },
            data:$httpParamSerializerJQLike(
                data
            )
        })
    }
});

app.service('prods',function($http,$rootScope,$location,$httpParamSerializerJQLike){
    this.getList = function(limit,order,page){
        return $http({
            method: 'GET',
            url: '/api/private/products?qty='+ limit +'&order='+order+'&page='+ page,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': $rootScope.token
            }
        })
    }
    this.delete = function(id){
        return $http({
            method: 'DELETE',
            url: '/api/private/products/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': $rootScope.token
            },
            data:$httpParamSerializerJQLike({
                id: id
            })
        })
    }
    this.add = function(data){
        return $http({
            method: 'POST',
            url: '/api/private/products/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': $rootScope.token
            },
            data:$httpParamSerializerJQLike(data)
        })
    }
})
/**
 * Created by Innokentii on 10.10.2016.
 */
/*Dashboard*/

app.controller('dashCtrl',
    function($scope,$route, $routeParams,$rootScope, $location,$http,$httpParamSerializerJQLike,user) {
        $scope.products = [];
        
        $scope.init = function(){
            user.get($rootScope.user_id).then(function(response){
                $scope.user = response.data;
                console.log(response.data);
                $scope.update.values = {};
                $scope.update.values.email = response.data.email;
                $scope.update.values.firstname = response.data.firstname;
                $scope.update.values.lastname = response.data.lastname;
            });
        }
        
        $scope.logout = function (){
            user.logout();
        }
        
        $scope.doUpdate = function(){
            $scope.updateResponse = '';
            $scope.update.errorText = null;
            if ($scope.update.$error.email ) {
                $scope.login.errorText = 'Enter valid email'
            } else if ($scope.update.values.pass0 != $scope.update.values.pass1) {
                $scope.update.errorText = 'Passwords doesn\'t match'
            }  else if ($scope.update.$error.minlength || $scope.update.$error.maxlength || $scope.update.$error.pattern) {
                $scope.login.errorText = 'Enter valid password'
            } else if($scope.update.$valid){
                user.update($rootScope.user_id,$scope.update.values).then(function (response) {
                    if (response.data.error){
                        $scope.update.errorText = response.data.error;
                    }else {
                        $scope.user = response.data;
                        $scope.update.values = {};
                        $scope.update.values.email = response.data.email;
                        $scope.update.values.firstname = response.data.firstname;
                        $scope.update.values.lastname = response.data.lastname;
                        $scope.updateForm = false;
                        $scope.updateResponse = 'Profile updated successfully';
                    }
                })
            } else {
                $scope.update.errorText = 'Please fill Email and current password fields';
            }
        }
    });


/**
 * Created by Innokentii on 10.10.2016.
 */
/*login*/
app.controller('loginCtrl', 
    function($scope,$route,$rootScope, $routeParams, $location,$http,$httpParamSerializerJQLike) {
        $scope.doLogin = function(){
            $scope.login.errorText = null;
            if ($scope.login.$error.email ) {
                $scope.login.errorText = 'Enter valid email'
            } else if ($scope.login.$error.minlength || $scope.login.$error.maxlength || $scope.login.$error.pattern) {
                $scope.login.errorText = 'Enter valid password'
            } else if($scope.login.$valid){
                console.log('all valid');
                $http({
                    method: 'POST',
                    url: '/api/login',
                    data: $httpParamSerializerJQLike({
                        email: $scope.login.email,
                        pass: $scope.login.pass
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response){
                    console.log(response,response.data.logged);
                    if (response.data.logged) {
                        console.log(response.data.user_id);
                        if ($scope.login.remember) {
                            localStorage.setItem('token', response.data.token);
                            localStorage.setItem('user_id', response.data.user_id);
                        } else {
                            sessionStorage.setItem('token', response.data.token);
                            sessionStorage.setItem('user_id', response.data.user_id);
                        }
                        $rootScope.user_id = response.data.user_id;
                        $rootScope.signed = true;
                        $rootScope.token = response.data.token;
                        $location.path("/");
                    } else {
                        $scope.login.errorText = 'Invalid email or password'
                    }
                })
            } else {
                $scope.login.errorText = 'Please fill all fields';
            }
        }
});
/* sign up*/
app.controller('signCtrl',
    function($scope,$rootScope,$route, $routeParams, $location,$http,$httpParamSerializerJQLike) {
        $scope.doSign = function(){
            if ($scope.sign.$error.email ) {
                $scope.sign.errorText = 'Enter valid email'
            } else if ($scope.sign.$error.minlength || $scope.sign.$error.maxlength || $scope.sign.$error.pattern) {
                $scope.sign.errorText = 'Enter valid password'
            } else if ($scope.sign.pass0 != $scope.sign.pass1) {
                $scope.sign.errorText = 'Passwords doesn\'t match'
            }  else if($scope.sign.$valid){
                $http({
                    method: 'POST',
                    url: '/api/sign',
                    data: $httpParamSerializerJQLike({
                        email: $scope.sign.email,
                        pass: $scope.sign.pass0
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response){
                    console.log(response.data);
                    if (response.data.error){
                        $scope.sign.errorText = response.data.error
                    } else {
                        console.log(response.data.user_id);
                        if ($scope.sign.remember) {
                            localStorage.setItem('token', response.data.token);
                            localStorage.setItem('user_id', response.data.user_id);
                        } else {
                            sessionStorage.setItem('token', response.data.token);
                            sessionStorage.setItem('user_id', response.data.user_id);
                        }
                        $rootScope.signed = true;
                        $rootScope.user_id = response.data.user_id;
                        $rootScope.token = response.data.token;
                        $location.path("/");
                    }
                })
            } else {
                $scope.sign.errorText = 'Please fill all fields';
            }
        }
    });
/**
 * Created by Innokentii on 13.10.2016.
 */
app.controller('productListCtrl',
    function($scope,$route, $routeParams,$rootScope, $location,$http,$httpParamSerializerJQLike,prods) {
        $scope.limit = '10';
        $scope.order = 'asc';
        $scope.page = 0;
        $scope.descrShow = -1;
        $scope.check = {};
        
        
        $scope.toggleDescr = function(index){
            if($scope.descrShow == index){
                $scope.descrShow = -1;
            } else {
                $scope.descrShow = index;
            }
        }
        
        $scope.delete = function (id) {
            prods.delete(id).then(function(response){
                console.log(response);
                if(response.data.error) {
                    console.log(response.data.error);
                } else {
                    $scope.refresh();
                }
            })
        }
        
        $scope.refresh = function(){
            $scope.pages = [];
            prods.getList($scope.limit, $scope.order, $scope.page).then(function (response) {
                $scope.products = response.data.prods;
                $scope.total = response.data.total;
                $scope.products_loaded = true;
                angular.forEach($scope.products,function(value){
                    $scope.check[value.id] = false;
                });
                if ($scope.total > $scope.limit){
                    for(var i = 0;i < Math.ceil($scope.total/$scope.limit);i++){
                        $scope.pages.push(1 + i);
                        console.log(i < $scope.total);
                    }
                }
            });
        }
        $scope.paginate = function(page){
            $scope.page = page;
            $scope.refresh();
        }
        
        $scope.addProduct = function(){
            $scope.add_prod.errorText = '';
            $scope.add_prod.resp = '';
            if ($scope.add_prod.$error.price ) {
                $scope.add_prod.errorText = 'Enter valid number'
            } else if($scope.add_prod.$error.maxlength){
                $scope.add_prod.errorText = 'Description too long'
            } else if ($scope.add_prod.$valid){
                 prods.add($scope.add_prod.values).then(function(response){
                     $scope.refresh();
                     $scope.add_prod.values = {};
                     $scope.add_prod.resp = 'Product added';
                     $scope.addShow = false;
                 });
            }else {
                $scope.add_prod.errorText = 'Please fill all fields';
            }
        }

        $scope.deleteSelected = function () {
            var id = '';
            angular.forEach($scope.check,function(value,key){
                if (value){
                    id += key+',';
                }
            });
            id = id.slice(0, -1);
            prods.delete(id).then(function(response){
                $scope.refresh();
            })
        }
        
        $scope.toggleCheck = function(){
            console.log($scope.check_all);
            angular.forEach($scope.check,function(value,key){
                $scope.check[key] = $scope.check_all;
            });
        }
    });