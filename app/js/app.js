'use strict';

/* App Module
*
* controlling routing
* Author: Fei Wu
*
* */

var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            controller: 'TopicListController',
            templateUrl: 'partials/topic-list.html'
        })
        .when('/topic/:id',{
            controller: 'TopicDetailController',
            templateUrl: 'partials/topic-detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});