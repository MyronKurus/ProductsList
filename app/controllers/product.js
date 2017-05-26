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