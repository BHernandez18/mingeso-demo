app.controller('MainController', ['$scope', '$location', function ($scope, $location) {

        $scope.title = "Demostracion MINGESO";

        $scope.registerPage = $location.path() === '/registrarAlumnos';
        $scope.alumnosPage = $location.path() === '/buscarAlumnos';

        $scope.navigation = [
            {"text": "Registar alumnos", "link": "#!/registrarAlumnos", "condition": $scope.registerPage},
            {"text": "Buscar alumnos", "link": "#!/buscarAlumnos", "condition": $scope.alumnosPage}
        ];

    }]);