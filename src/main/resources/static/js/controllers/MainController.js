app.controller('MainController', ['$scope', '$location', function ($scope, $location) {

        $scope.title = "Demostracion MINGESO";

        $scope.registerPage = $location.path() === '/registrarAlumno';

        $scope.navigation = [
            {"text": "Registar alumno", "link": "#!/registrarAlumno", "condition": $scope.registerPage}
        ];

    }]);