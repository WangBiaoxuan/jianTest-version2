/**
 * Created by gehua on 2016/9/1.
 */
angular.module("main",[])
    .controller('mainContrl',[
        '$scope',
        function($scope){
            $scope.on_click = function(x){
                if(x === 1){
                    location.href = "http://localhost:63342/jianTest-version2/app/mod/index.html";
                }else if(x === 2){
                    location.href = "http://localhost:63342/jianTest-version2/app/index.html";
                }
            }
        }
    ]);