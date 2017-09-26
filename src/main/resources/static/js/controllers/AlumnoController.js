/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('AlumnoController', ['$scope', '$http', 'NgTableParams', function ($scope, $http, NgTableParams) {
        
        //var data = [];
        //$scope.tableParams = new NgTableParams({}, {dataset: data});
        $scope.alumnos = [];
        $scope.facultades = [];
        $scope.selectedFacultad = "";
        $scope.msg = "";

        $scope.getAlumnos = function (id) {
            $http.get('http://localhost:1414/alumno/allByFacultad/' + id).then(function (response) {
                //$scope.alumnos = [];
                $scope.tableParams = new NgTableParams({}, {dataset: response.data});
                $scope.alumnos = response.data;
//                for (var i = 0; i < response.data.length; i++) {
//                    var tmp = response.data[i];
//                    if (tmp.facultad.idFacultad == id) {
//                        data.push(response.data[i]);
//                        //$scope.alumnos.push(response.data[i]);
//                    }
//                }
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