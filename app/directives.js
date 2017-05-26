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