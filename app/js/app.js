'use strict';

var app = angular.module('app', ['ngRoute', 'angular-loading-bar']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/daily', {
        templateUrl: 'templates/daily-calculator.html',
        controller: 'DailyCalculatorController'
    });

    $routeProvider.when('/info', {
        templateUrl: 'templates/info-sheet.html'
    })
});