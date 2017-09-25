/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('AlumnoController', ['$scope', '$http', function ($scope, $http) {

        $scope.alumnos = [];
        $scope.facultades = [];
        $scope.selectedFacultad = "";
        $scope.msg = "";

        $scope.getAlumnos = function (id) {
            $http.get('http://localhost:1414/alumno/all/').then(function (response) {
                $scope.alumnos = [];
                for (var i = 0; i < response.data.length; i++) {
                    var tmp = response.data[i];
                    if (tmp.facultad.idFacultad == id) {
                        $scope.alumnos.push(response.data[i]);
                    }
                }
            });
            $scope.alumnos;
        }

        $scope.getFacultades = function () {
            $http.get('http://localhost:1414/facultad/all/').then(function (response) {
                $scope.facultades = response.data;
            }, function errorGet(response) {
                $scope.msg = "Error al obtener facultades";
            });

            $scope.msg;
        };

        $scope.getFacultades();

    }]);