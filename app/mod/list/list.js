/**
 * Created by gehua on 2016/9/1.
 */
angular.module('User',[
    'ngAnimate',
    'ui.router'
    ])
    .controller('listCtrl',[
        '$scope',
        '$rootScope',
        '$http',
        '$state',
        '$stateParams',
        function ($scope ,$rootScope, $http, $state, $stateParams) {
            if(!$rootScope.x){
                $http({
                    method: 'GET',
                    url: '../data/test.json'
                }).then(function successCallback(data) {
                    $rootScope.data = data.data;
                    console.log($scope.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            }
            $scope.delete = function (index){
                $scope.data.splice(index,1);
                console.log($scope.data);
            };
            $scope.details = function (index){
                $state.go('update',{'id': index,'name': $scope.data[index].name,'sex': $scope.data[index].sex,'age': $scope.data[index].age,'email': $scope.data[index].email});
            }
        }
    ])
