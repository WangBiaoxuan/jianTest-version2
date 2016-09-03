/**
 * Created by gehua on 2016/9/1.
 */
angular.module('User',[
    'ngAnimate',
    'ui.router'
    ])
    .controller('updateCtrl',[
        '$scope',
        '$rootScope' ,
        '$state' ,
        '$stateParams',
        function ($scope,$rootScope, $state, $stateParams) {
            $rootScope.x = 1;
            $scope.data = $stateParams;
            console.log($scope.data);
            $scope.update = function(){
                $rootScope.data.splice($stateParams.id,1,{
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
