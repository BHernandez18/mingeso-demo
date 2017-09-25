/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */

app.controller('RegisterController', ['$scope', '$http', function ($scope, $http) {

        $scope.facultades = [];
        $scope.newAlumno = {};
        $scope.msg = "";

        $scope.resetNewAlumno = function () {
            $scope.newAlumno = {
                "rut": "",
                "nombre": "",
                "correo": "",
                "ingreso": 2017,
                "facultad": {
                    "idFacultad": 0,
                    "nombre": ""
                }
            };
        };

        $scope.getFacultades = function () {
            $http.get('http://localhost:1414/facultad/all/').then(function (response) {
                $scope.facultades = response.data;
            }, function errorGet(response) {
                $scope.msg = "Error al obtener facultades";
            });

            $scope.msg;
        };

        $scope.sendAlumno = function () {
            var alumno = {
                "rut": $scope.newAlumno.rut,
                "nombre": $scope.newAlumno.nombre,
                "correo": $scope.newAlumno.correo,
                "ingreso": $scope.newAlumno.ingreso,
                "facultad": {
                    "idFacultad": $scope.newAlumno.facultad.idFacultad,
                    "nombre": ""
                }
            };

            $http.post('http://localhost:1414/alumno/addAlumno', alumno).then(function (response) {
                $scope.msg = "Ha agregado un alumno!";
            }, function errorPost(response) {
                $scope.msg = "Se produjo un error :(";
            });

            $scope.msg;
        };

        $scope.getFacultades();
        $scope.resetNewAlumno();

    }]);


