var app = angular.module('mingeso-demo',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/registrarAlumno',{
            templateUrl: 'js/views/registrarAlumno.html',
            controller: 'RegisterController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});