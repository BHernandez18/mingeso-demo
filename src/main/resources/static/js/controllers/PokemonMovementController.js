app.controller('PokemonMovementController', ['$scope','$http', function($scope,$http) {

    $scope.movements = [];
    $scope.pokemons = [];
    $scope.types = [];
    $scope.newMovement = {};
    $scope.pokemonByMovement = [];

    $scope.resetNewMovement = function(){
        $scope.newMovement = {
        "name":"",
        "description":"",
        "type":0
        }
    }

    $scope.loadTypes = function(){
        $http.get('/pokemonTypes').then(function(response){
            $scope.types = response.data._embedded.pokemonTypes;
        });
    }

    $scope.loadPokemons = function(){
        $http.get('/pokemons').then(function(response){
            $scope.pokemons = response.data._embedded.pokemons;
        });
    }

    $scope.loadMovements = function(){
        $http.get('/pokemonMovements').then(function(response){
            $scope.movements = response.data._embedded.pokemonMovements;
        });
        $scope.resetNewMovement();
    }

    $scope.send = function(){
        $http.post('/pokemonMovements',$scope.newMovement).then(function(response){
            console.log(response);
            $scope.loadMovements();
            $scope.resetNewMovement();
        });
    }

    $scope.assign = function(){
        $http.post($scope.pokemonLearn,$scope.movementLearn,{headers:{'Content-Type':'text/uri-list'}}).then(function(response){
            console.log(response);
        });
    }

    $scope.loadPokemonByMovement = function(movement){
        $http.get(movement+'/pokemon').then(function(response){
            console.log(response);
            $scope.pokemonByMovement = response.data._embedded.pokemons;
        });
    }

    $scope.loadTypes();
    $scope.loadPokemons();
    $scope.loadMovements();

}]);