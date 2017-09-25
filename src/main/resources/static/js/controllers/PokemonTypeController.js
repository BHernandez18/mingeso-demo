app.controller('PokemonTypeController', ['$scope','$http', function($scope,$http) {

    $scope.types = [];
    $scope.pokemons = [];

    $scope.loadTypes = function(){
        $http.get('/pokemonTypes').then(function(response){
            $scope.types = response.data._embedded.pokemonTypes;
        });
    }

    $scope.showByType = function(typeId){
        $http.get('/pokemonTypes/'+typeId+'/pokemon').then(function(response){
            $scope.pokemons = response.data._embedded.pokemons;
        });
    }

    $scope.loadTypes();

}]);