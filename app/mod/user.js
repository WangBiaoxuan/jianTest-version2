/**
 * Created by gehua on 2016/9/1.
 */
angular.module("User",[
    'ngAnimate',
    'ui.router',
    'oc.lazyLoad'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider , $urlRouterProvider){
            $stateProvider
                .state('list', {
                    url: '/list',
                    templateUrl: 'list/list.html',
                    controller: 'listCtrl',
                    resolve:{
                        load:['$ocLazyLoad',function($ocLazyLoad){
                            return $ocLazyLoad.load([
                                'list/list.css',
                                'list/list.js'
                            ]);
                        }]
                    }
                })
                .state('add', {
                    url: '/add',
                    templateUrl: 'add/add.html',
                    controller: 'addCtrl',
                    resolve:{
                        load:['$ocLazyLoad',function($ocLazyLoad){
                            return $ocLazyLoad.load([
                                'add/add.css',
                                'add/add.js'
                            ]);
                        }]
                    }
                })
                .state('update', {
                    url: '/update?id&name&sex&age&email',
                    templateUrl: 'update/update.html',
                    controller: 'updateCtrl',
                    resolve:{
                        load:['$ocLazyLoad',function($ocLazyLoad){
                            return $ocLazyLoad.load([
                                'update/update.css',
                                'update/update.js'
                            ]);
                        }]
                    }
                });
            $urlRouterProvider.otherwise('/list');
        }
    ]);