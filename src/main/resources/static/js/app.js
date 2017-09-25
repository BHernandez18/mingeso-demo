var app = angular.module('mingeso-demo', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/registrarAlumnos', {
                templateUrl: 'js/views/registrarAlumno.html',
                controller: 'RegisterController'
            })
            .when('/buscarAlumnos', {
                templateUrl: 'js/views/mostrarAlumnos.html',
                controller: 'AlumnoController'
            })
            .otherwise({
                redirectTo: '/index'
            });
});