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