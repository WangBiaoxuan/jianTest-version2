/**
 * Created by gehua on 2016/9/1.
 */
angular.module('UserCon',[
    'ngAnimate',
    'ui.router'
    ])
    .controller('listCtrl',[
        '$scope',
        '$rootScope' ,
        '$http',
        '$state',
        '$stateParams',
        function ($scope , $rootScope , $http, $state, $stateParams) {
            if(!$rootScope.x){
                $http({
                    method: 'GET',
                    url: '../data/test.json'
                }).then(function successCallback(data) {
                    $rootScope.data = data.data;
                    console.log($rootScope.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            }
            $scope.delete = function (index){
                $rootScope.data.splice(index,1);
                console.log($rootScope.data);
            };
            $scope.details = function (index){
                console.log($rootScope.data[index]);
                $state.go('update',{'id' :index});
            }
        }
    ])
    .controller('addCtrl',[
        '$scope',
        '$rootScope' ,
        '$state' ,
        function ($scope,$rootScope, $state) {
            $rootScope.x = 1;
            $scope.data = [];
            $scope.add = function(){
                $rootScope.data.push({
                    "name" : $scope.data.name,
                    "sex" : $scope.data.sex,
                    "age" : $scope.data.age,
                    "email" : $scope.data.email
                });
                console.log($scope.data);
                $state.go('list');
            };
        }
    ])
    .controller('updateCtrl',[
        '$scope',
        '$rootScope' ,
        '$state' ,
        '$stateParams',
        function ($scope,$rootScope, $state, $stateParams) {
            $rootScope.x = 1;
            var x = $stateParams.id;
            console.log($stateParams.id);
            $scope.data = $rootScope.data[x];
            console.log($scope.data);
            $scope.update = function(){
                $rootScope.data.splice(x,1,{
                    "name" : $scope.data.name,
                    "sex" : $scope.data.sex,
                    "age" : $scope.data.age,
                    "email" : $scope.data.email
                });
                console.log($rootScope.data);
                $state.go('list');
            };
        }
    ])
