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