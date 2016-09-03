/**
 * Created by gehua on 2016/9/1.
 */
angular.module('User',[
    'ngAnimate',
    'ui.router'
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

