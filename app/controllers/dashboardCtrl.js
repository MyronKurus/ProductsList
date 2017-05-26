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

