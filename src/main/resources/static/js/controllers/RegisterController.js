/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('RegisterController', ['$scope', '$http', function ($scope, $http) {

        $scope.facultades = [];
        $scope.newAlumno = {};
        $scope.newFacultad = {};
        $scope.msg = "";

        $scope.resetNewAlumno = function () {
            $scope.newAlumno = {
                "rut": "",
                "nombre": "",
                "correo": "",
                "ingreso": 2017,
                "facultad": {}
            }
        }

        $scope.getFacultades = function () {
            $http.get('http://localhost:1414/facultad/all/').then(function (data) {
                console.log(data);
                $scope.facultades = data;
            });
        }

        $scope.sendAlumno = function () {
            console.log($scope.newAlumno);
            var alumno = {
                "rut": $scope.newAlumno.rut,
                "nombre": $scope.newAlumno.nombre,
                "correo": $scope.newAlumno.correo,
                "ingreso": $scope.newAlumno.ingreso,
                "facultad": $scope.newFacultad
            };
            $http.post('http://localhost:1414/alumno/addAlumno', alumno).success(function (data) {
                $scope.msg = "Ha añadido un alumno!";
            }).error(function (data) {
                $scope.msg = "Se produjo un error :(";
            });
        }

        $scope.getFacultades();
        $scope.resetNewAlumno();
        $scope.newFacultad = $scope.facultades[0];

    }]);


